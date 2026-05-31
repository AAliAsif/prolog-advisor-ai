// =============================================================================
// SMART TECH BUY ADVISOR — PROLOG KNOWLEDGE BASE
// =============================================================================
// ALL intelligence (facts, rules, scoring, matching, reasoning, explanations)
// lives in this SWI-Prolog–style program. It is executed by the Tau Prolog
// engine (a real Prolog interpreter). JavaScript only loads this program,
// asserts the user's answers as facts, runs queries and renders the results.
// The reasoning is 100% Prolog.
// =============================================================================

export const KNOWLEDGE_BASE = String.raw`
% ---------------------------------------------------------------------------
% LAPTOP FACTS
% laptop(Id, Name, Brand, Price, Cpu, RamGB, StorageGB, Gpu, VramGB,
%        WeightKg, BatteryWh, ScreenIn, Os, Tags).
% ---------------------------------------------------------------------------
laptop(l1,  'Lenovo Legion 5 Pro', lenovo, 1450, 'AMD Ryzen 7', 16, 1024, 'RTX 4060', 8, 2.5, 80, 16, windows, [gaming, ai, programming, video, future]).
laptop(l2,  'ASUS ROG Zephyrus G14', asus, 1700, 'AMD Ryzen 9', 32, 1024, 'RTX 4070', 8, 1.6, 76, 14, windows, [gaming, ai, datascience, portable, future, premium]).
laptop(l3,  'Acer Nitro 5', acer, 950, 'Intel Core i5', 16, 512, 'RTX 3050', 4, 2.2, 57, 15, windows, [gaming, budget, student, programming]).
laptop(l4,  'Dell XPS 15', dell, 1900, 'Intel Core i7', 16, 1024, 'RTX 4050', 6, 1.9, 86, 15, windows, [design, business, premium, programming, portable]).
laptop(l5,  'Apple MacBook Air M3', apple, 1300, 'Apple M3', 16, 512, 'M3 GPU', 10, 1.2, 52, 13, macos, [student, business, portable, battery, design, programming]).
laptop(l6,  'Apple MacBook Pro M3 Max', apple, 3200, 'Apple M3 Max', 36, 1024, 'M3 Max GPU', 40, 2.1, 100, 16, macos, [video, design, ai, datascience, premium, future, programming]).
laptop(l7,  'HP Pavilion 15', hp, 650, 'Intel Core i3', 8, 256, 'Integrated', 0, 1.7, 41, 15, windows, [budget, student, business]).
laptop(l8,  'Lenovo ThinkPad X1 Carbon', lenovo, 1600, 'Intel Core i7', 16, 512, 'Integrated', 0, 1.1, 57, 14, windows, [business, portable, security, programming, battery]).
laptop(l9,  'MSI Raider GE78', msi, 2600, 'Intel Core i9', 32, 2048, 'RTX 4080', 12, 3.1, 99, 17, windows, [gaming, ai, video, future, premium, datascience]).
laptop(l10, 'ASUS TUF Gaming A15', asus, 1100, 'AMD Ryzen 7', 16, 512, 'RTX 4050', 6, 2.2, 90, 15, windows, [gaming, budget, programming, student]).
laptop(l11, 'Dell Latitude 7440', dell, 1350, 'Intel Core i5', 16, 512, 'Integrated', 0, 1.3, 54, 14, windows, [business, security, portable, battery]).
laptop(l12, 'System76 Lemur Pro', system76, 1400, 'Intel Core i7', 16, 1024, 'Integrated', 0, 1.0, 73, 14, linux, [linux, programming, portable, battery, security]).
laptop(l13, 'Razer Blade 16', razer, 3000, 'Intel Core i9', 32, 1024, 'RTX 4090', 16, 2.4, 95, 16, windows, [gaming, ai, video, datascience, premium, future]).
laptop(l14, 'HP Victus 15', hp, 800, 'AMD Ryzen 5', 16, 512, 'RTX 3050', 4, 2.3, 70, 15, windows, [gaming, budget, student, programming]).
laptop(l15, 'Microsoft Surface Laptop 5', microsoft, 1250, 'Intel Core i5', 16, 512, 'Integrated', 0, 1.3, 47, 13, windows, [student, business, portable, battery, design]).
laptop(l16, 'Lenovo IdeaPad Slim 3', lenovo, 550, 'AMD Ryzen 5', 8, 512, 'Integrated', 0, 1.6, 47, 15, windows, [budget, student, business]).

% ---------------------------------------------------------------------------
% MOBILE FACTS
% mobile(Id, Name, Brand, Price, Soc, RamGB, StorageGB, BatteryMah,
%        Camera, ChargeW, Display, Tags).
% ---------------------------------------------------------------------------
mobile(m1,  'Apple iPhone 15 Pro Max', apple, 1200, 'A17 Pro', 8, 256, 4422, 48, 27, 'OLED 120Hz', [premium, camera, gaming, video, ai, secure, flagship]).
mobile(m2,  'Samsung Galaxy S24 Ultra', samsung, 1300, 'Snapdragon 8 Gen 3', 12, 512, 5000, 200, 45, 'AMOLED 120Hz', [premium, camera, gaming, ai, battery, flagship, secure, display]).
mobile(m3,  'Google Pixel 8 Pro', google, 999, 'Tensor G3', 12, 256, 5050, 50, 30, 'OLED 120Hz', [camera, ai, video, premium, secure]).
mobile(m4,  'ASUS ROG Phone 8', asus, 1100, 'Snapdragon 8 Gen 3', 16, 512, 5500, 50, 65, 'AMOLED 165Hz', [gaming, battery, display, premium, fastcharge]).
mobile(m5,  'Xiaomi Redmi Note 13 Pro', xiaomi, 350, 'Snapdragon 7s Gen 2', 8, 256, 5100, 200, 67, 'AMOLED 120Hz', [budget, camera, battery, value, student, fastcharge]).
mobile(m6,  'OnePlus 12', oneplus, 800, 'Snapdragon 8 Gen 3', 16, 256, 5400, 50, 100, 'AMOLED 120Hz', [gaming, fastcharge, battery, value, display, flagship]).
mobile(m7,  'Samsung Galaxy A55', samsung, 450, 'Exynos 1480', 8, 128, 5000, 50, 25, 'AMOLED 120Hz', [budget, value, student, battery, secure]).
mobile(m8,  'Apple iPhone SE', apple, 430, 'A15 Bionic', 4, 128, 2018, 12, 20, 'LCD 60Hz', [budget, secure, student, value]).
mobile(m9,  'Nothing Phone 2', nothing, 600, 'Snapdragon 8+ Gen 1', 12, 256, 4700, 50, 45, 'OLED 120Hz', [value, design, camera, gaming]).
mobile(m10, 'Vivo X100 Pro', vivo, 950, 'Dimensity 9300', 16, 512, 5400, 50, 100, 'AMOLED 120Hz', [camera, video, premium, fastcharge, battery]).
mobile(m11, 'Motorola Moto G Power', motorola, 300, 'Dimensity 7020', 8, 128, 5000, 50, 30, 'LCD 120Hz', [budget, battery, value, student]).
mobile(m12, 'Sony Xperia 1 V', sony, 1300, 'Snapdragon 8 Gen 2', 12, 256, 5000, 48, 30, 'OLED 120Hz', [camera, video, premium, display, flagship]).
mobile(m13, 'Realme GT 5 Pro', realme, 600, 'Snapdragon 8 Gen 3', 12, 256, 5400, 50, 100, 'AMOLED 144Hz', [gaming, fastcharge, value, display, battery]).
mobile(m14, 'Google Pixel 7a', google, 400, 'Tensor G2', 8, 128, 4385, 64, 18, 'OLED 90Hz', [camera, ai, budget, value, secure, student]).

% ---------------------------------------------------------------------------
% USER-DESIRED TAGS — derived purely by Prolog from the answered questions.
% user_pref/2 facts are asserted by the engine before querying.
% ---------------------------------------------------------------------------
desired(T) :- user_pref(usage, U),   usage_tag(U, T).
desired(T) :- user_pref(career, C),  career_tag(C, T).
desired(T) :- user_pref(profile, P), profile_tag(P, T).
desired(gaming)  :- user_pref(gaming, yes).
desired(ai)      :- user_pref(ai, yes).
desired(ai)      :- user_pref(gpu, ai).
desired(gaming)  :- user_pref(gpu, gaming).
desired(camera)  :- user_pref(camera_phone, yes).
desired(gaming)  :- user_pref(gaming_phone, yes).
desired(secure)  :- user_pref(security, yes).
desired(security):- user_pref(security, yes).
desired(battery) :- user_pref(battery, high).
desired(portable):- user_pref(portability, portable).
desired(future)  :- user_pref(future, yes).
desired(T) :- user_pref(brand, B), B \= any, T = brand(B).

usage_tag(gaming, gaming).
usage_tag(programming, programming).
usage_tag(ai, ai).
usage_tag(ai, datascience).
usage_tag(design, design).
usage_tag(video, video).
usage_tag(office, business).
usage_tag(study, student).
usage_tag(browsing, business).

career_tag(software_engineer, programming).
career_tag(ai_engineer, ai).
career_tag(ai_engineer, datascience).
career_tag(data_scientist, datascience).
career_tag(data_scientist, ai).
career_tag(cyber_security, security).
career_tag(ethical_hacker, security).
career_tag(ethical_hacker, linux).
career_tag(graphic_designer, design).
career_tag(video_editor, video).
career_tag(architect, design).
career_tag(business, business).

profile_tag(student, student).
profile_tag(gamer, gaming).
profile_tag(professional, business).

% ---------------------------------------------------------------------------
% BUDGET LIMIT  (15% tolerance over stated budget)
% ---------------------------------------------------------------------------
budget_limit(Limit) :- user_pref(budget, B), B > 0, Limit is (B * 115) // 100.
budget_limit(1000000) :- \+ ( user_pref(budget, B), B > 0 ).

% ---------------------------------------------------------------------------
% SCORING — every score derived by Prolog rules from the attributes.
% ---------------------------------------------------------------------------
% Laptop sub-scores (0..100, clamped)
lap_gaming(Id, S)      :- laptop(Id,_,_,_,_,Ram,_,_,V,_,_,_,_,_), Raw is V*9 + Ram, clamp(Raw, S).
lap_ai(Id, S)          :- laptop(Id,_,_,_,_,Ram,_,_,V,_,_,_,_,_), Raw is V*7 + Ram*2, clamp(Raw, S).
lap_programming(Id, S) :- laptop(Id,_,_,_,_,Ram,St,_,_,_,_,_,_,_), Raw is Ram*4 + St//40, clamp(Raw, S).
lap_battery(Id, S)     :- laptop(Id,_,_,_,_,_,_,_,_,_,B,_,_,_), Raw is B + 15, clamp(Raw, S).
lap_portability(Id, S) :- laptop(Id,_,_,_,_,_,_,_,_,W,_,_,_,_), Raw is 130 - truncate(W*30), clamp(Raw, S).
lap_productivity(Id,S) :- laptop(Id,_,_,_,_,Ram,St,_,_,_,_,_,_,_), Raw is Ram*3 + St//50 + 20, clamp(Raw, S).

% Mobile sub-scores
mob_camera(Id, S)   :- mobile(Id,_,_,_,_,_,_,_,C,_,_,_), Raw is C//3 + 20, clamp(Raw, S).
mob_gaming(Id, S)   :- mobile(Id,_,_,_,_,Ram,_,_,_,_,_,_), Raw is Ram*5 + 20, clamp(Raw, S).
mob_battery(Id, S)  :- mobile(Id,_,_,_,_,_,_,Bat,_,_,_,_), Raw is Bat//70, clamp(Raw, S).
mob_charge(Id, S)   :- mobile(Id,_,_,_,_,_,_,_,_,Ch,_,_), Raw is Ch + 10, clamp(Raw, S).

clamp(Raw, 100) :- Raw >= 100, !.
clamp(Raw, 0)   :- Raw =< 0, !.
clamp(Raw, Raw).

% ---------------------------------------------------------------------------
% MATCH SCORE — how many desired tags an item provides (Prolog set logic)
% ---------------------------------------------------------------------------
item_tags(laptop, Id, Tags) :- laptop(Id,_,_,_,_,_,_,_,_,_,_,_,_,Tags).
item_tags(mobile, Id, Tags) :- mobile(Id,_,_,_,_,_,_,_,_,_,_,Tags).

item_brand(laptop, Id, Brand) :- laptop(Id,_,Brand,_,_,_,_,_,_,_,_,_,_,_).
item_brand(mobile, Id, Brand) :- mobile(Id,_,Brand,_,_,_,_,_,_,_,_,_).

item_price(laptop, Id, P) :- laptop(Id,_,_,P,_,_,_,_,_,_,_,_,_,_).
item_price(mobile, Id, P) :- mobile(Id,_,_,P,_,_,_,_,_,_,_,_).

item_name(laptop, Id, N) :- laptop(Id,N,_,_,_,_,_,_,_,_,_,_,_,_).
item_name(mobile, Id, N) :- mobile(Id,N,_,_,_,_,_,_,_,_,_,_).

match_score(Type, Id, Score) :-
    item_tags(Type, Id, Tags),
    findall(1, ( desired(D), is_tag(Type, Id, Tags, D) ), Hits),
    length(Hits, Count),
    Score is Count * 22.

is_tag(_, _, Tags, brand(B)) :- !, item_brand_in(B, Tags).
is_tag(Type, Id, _, brand(B)) :- item_brand(Type, Id, B).
is_tag(_, _, Tags, T) :- member(T, Tags).
item_brand_in(_, _) :- fail.

% ---------------------------------------------------------------------------
% TOTAL SCORE + RANKING
% ---------------------------------------------------------------------------
total_score(laptop, Id, Total) :-
    match_score(laptop, Id, M),
    lap_gaming(Id, G), lap_ai(Id, A), lap_programming(Id, P), lap_productivity(Id, Pr),
    Quality is (G + A + P + Pr) // 8,
    Total is M + Quality.
total_score(mobile, Id, Total) :-
    match_score(mobile, Id, M),
    mob_camera(Id, C), mob_gaming(Id, G), mob_battery(Id, B),
    Quality is (C + G + B) // 6,
    Total is M + Quality.

candidate(Type, Score-Id) :-
    item_price(Type, Id, Price),
    budget_limit(Limit),
    Price =< Limit,
    total_score(Type, Id, Score).

ranked(Type, Sorted) :-
    findall(S-Id, candidate(Type, S-Id), Pairs),
    keysort(Pairs, Asc),
    reverse(Asc, Sorted).

% ---------------------------------------------------------------------------
% EXPLANATIONS — "Why this product?" generated entirely by Prolog.
% ---------------------------------------------------------------------------
reason(Type, Id, R) :-
    desired(D), is_tag(Type, Id, _, D), tag_label(D, R).
reason(laptop, Id, 'Comfortable battery life') :-
    laptop(Id,_,_,_,_,_,_,_,_,_,B,_,_,_), B >= 80.
reason(laptop, Id, 'Lightweight & portable') :-
    laptop(Id,_,_,_,_,_,_,_,_,W,_,_,_,_), W =< 1.4.
reason(laptop, Id, 'Discrete GPU for heavy workloads') :-
    laptop(Id,_,_,_,_,_,_,_,V,_,_,_,_,_), V >= 6.
reason(laptop, Id, 'Plenty of RAM for multitasking') :-
    laptop(Id,_,_,_,_,Ram,_,_,_,_,_,_,_,_), Ram >= 16.
reason(mobile, Id, 'Excellent camera system') :-
    mobile(Id,_,_,_,_,_,_,_,C,_,_,_), C >= 50.
reason(mobile, Id, 'Large all-day battery') :-
    mobile(Id,_,_,_,_,_,_,Bat,_,_,_,_), Bat >= 5000.
reason(mobile, Id, 'Very fast charging') :-
    mobile(Id,_,_,_,_,_,_,_,_,Ch,_,_), Ch >= 60.
reason(Type, Id, 'Within your budget') :-
    item_price(Type, Id, P), budget_limit(L), P =< L.

tag_label(gaming, 'Great for gaming').
tag_label(ai, 'Suited for AI / ML work').
tag_label(datascience, 'Good for data science').
tag_label(programming, 'Ideal for programming').
tag_label(design, 'Strong for design work').
tag_label(video, 'Handles video editing').
tag_label(student, 'Student friendly').
tag_label(business, 'Solid for business / office').
tag_label(budget, 'Budget friendly').
tag_label(premium, 'Premium build & performance').
tag_label(portable, 'Highly portable').
tag_label(battery, 'Long battery life').
tag_label(security, 'Strong security features').
tag_label(secure, 'Strong security features').
tag_label(linux, 'Linux ready').
tag_label(future, 'Future-proof specs').
tag_label(camera, 'Outstanding camera').
tag_label(flagship, 'Flagship-tier device').
tag_label(display, 'Premium display').
tag_label(fastcharge, 'Fast charging support').
tag_label(value, 'Excellent value for money').
tag_label(brand(_), 'Matches your preferred brand').

reasons_atom(Type, Id, Atom) :-
    findall(R, distinct_reason(Type, Id, R), Rs0),
    take(5, Rs0, Rs),
    atomic_list_concat(Rs, '||', Atom).

distinct_reason(Type, Id, R) :-
    setof(X, reason(Type, Id, X), Set),
    member(R, Set).

take(0, _, []) :- !.
take(_, [], []) :- !.
take(N, [H|T], [H|R]) :- N > 0, N1 is N - 1, take(N1, T, R).

% ---------------------------------------------------------------------------
% PUBLIC QUERY — recommend/7 enumerates the top 5 ranked items with reasons.
% ---------------------------------------------------------------------------
recommend(Type, Rank, Name, Brand, Price, Score, Why) :-
    ranked(Type, Sorted),
    nth1(Rank, Sorted, Score-Id),
    Rank =< 5,
    item_name(Type, Id, Name),
    item_brand(Type, Id, Brand),
    item_price(Type, Id, Price),
    reasons_atom(Type, Id, Why).

% Per-item score breakdown for the radar / score panels
laptop_scores(Id, Gaming, Ai, Prog, Battery, Portability, Productivity) :-
    lap_gaming(Id, Gaming), lap_ai(Id, Ai), lap_programming(Id, Prog),
    lap_battery(Id, Battery), lap_portability(Id, Portability), lap_productivity(Id, Productivity).
`;
