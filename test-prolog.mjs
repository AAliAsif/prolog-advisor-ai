import { KNOWLEDGE_BASE } from "./src/lib/prolog/knowledgeBase";
import pl from "tau-prolog";
import lists from "tau-prolog/modules/lists.js";
import fs from "fs";
lists(pl);
function run(facts, type, label){
  const s = pl.create(3000000);
  fs.writeFileSync("/tmp/kbx.pl", KNOWLEDGE_BASE + "\n" + facts);
  s.consult("/tmp/kbx.pl", { success: () => {
    console.log("\n=== "+label+" ===");
    s.query(`recommend(${type}, Rank, Name, Brand, Price, Score, Why).`, { success: () => {
      const loop = () => s.answer({
        success: (a) => { console.log(a.links.Rank.toString(), a.links.Name.toString(), "sc="+a.links.Score.toString(), "$"+a.links.Price.toString(), "|", a.links.Why.toString()); loop(); },
        fail: () => {}, error: (e) => console.log("ANSWER ERR", e.toString()),
      });
      loop();
    }, error: (e) => console.log("QUERY ERR", e.toString()) });
  }, error: (e) => console.log("CONSULT ERR", e.toString()) });
}
run("user_pref(budget,1600).\nuser_pref(usage,ai).\nuser_pref(career,ai_engineer).\nuser_pref(ai,yes).\nuser_pref(gpu,ai).\nuser_pref(ram,16).", "laptop", "AI laptop $1600");
setTimeout(()=>run("user_pref(budget,800).\nuser_pref(camera_phone,yes).\nuser_pref(battery,high).", "mobile", "Camera phone $800"), 300);
