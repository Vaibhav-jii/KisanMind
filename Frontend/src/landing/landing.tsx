import { useState, useEffect } from "react";
import {
    Leaf, TrendingUp, FileText, Cloud, BarChart3, LayoutDashboard,
    ArrowRight, ChevronRight, Check,
} from "lucide-react";

const CONTENT = {
    en: {
        nav: { login: "Sign In", try: "Try Platform" },
        hero: {
            tag: "Agricultural Intelligence Platform",
            headline: ["Smarter decisions", "for every farmer"],
            sub: "KisanMind gives agricultural officers and cooperatives real-time crop analysis, market forecasting, and government scheme tracking — all in one place.",
            cta: "Access Platform",
        },

        features: {
            label: "What KisanMind does",
            headline: "Six capabilities. One platform.",
            sub: "Built for district agricultural officers, field advisors, and cooperatives managing large farmer portfolios across Uttar Pradesh.",
            items: [
                {
                    icon: Leaf,
                    title: "Crop Disease Detection",
                    desc: "Upload a leaf image and receive an instant diagnosis — disease name, confidence score, severity stage, and a step-by-step treatment protocol.",
                },
                {
                    icon: TrendingUp,
                    title: "Market Price Forecasting",
                    desc: "7-day price predictions for wheat, mustard, potato, maize, and rice across all Agra Division mandis. Know when to sell.",
                },
                {
                    icon: FileText,
                    title: "Government Scheme Eligibility",
                    desc: "Automatically match farmers to PM-KISAN, PMFBY, Kisan Credit Card, and state schemes. Track deadlines and application status.",
                },
                {
                    icon: Cloud,
                    title: "Weather & Spray Advisories",
                    desc: "7-day IMD-sourced forecasts with field-level advisories — no-spray windows, heat stress alerts, and irrigation guidance.",
                },
                {
                    icon: BarChart3,
                    title: "Advisory Reports",
                    desc: "Generate a complete Crop Advisory Report in one click. Shareable, downloadable, and formatted for official use.",
                },
                {
                    icon: LayoutDashboard,
                    title: "District Dashboard",
                    desc: "Monitor all active farmers, open alerts, and disbursed benefits across your district from a single command centre.",
                },
            ],
        },
        how: {
            label: "How it works",
            headline: "From field to decision in minutes.",
            steps: [
                { n: "01", title: "Register the farmer", desc: "Enter basic farmer details — ID, location, crop type, and land area. Takes under two minutes." },
                { n: "02", title: "Upload a crop sample", desc: "Photograph the affected leaf or field. The platform analyses the image and identifies disease, severity, and confidence." },
                { n: "03", title: "Receive the full report", desc: "A complete Crop Advisory Report is generated — covering health, market outlook, scheme eligibility, and weather — ready to share." },
            ],
        },
        audience: {
            label: "Built for",
            headline: "Designed for the people who serve farmers.",
            items: [
                { title: "District Agricultural Officers", desc: "Monitor your entire district. Track open alerts, pending reports, and scheme disbursements from one dashboard." },
                { title: "Field Advisors (VLWs)", desc: "Generate on-site crop reports for individual farmers. Get treatment guidance in plain language." },
                { title: "Farmer Cooperatives", desc: "Coordinate market timing across your member farms. Identify the best selling window for each crop." },
                { title: "State Agriculture Dept.", desc: "Aggregate district-level data for policy reporting and scheme performance monitoring." },
            ],
        },
        cta: {
            headline: "Start using KisanMind today.",
            sub: "Available to registered agricultural officers and cooperative staff under the UP Directorate of Agriculture.",
            btn: "Sign In to Platform",
        },
        footer: {
            copy: "KisanMind Agricultural Intelligence Platform",
        },
    },
    hi: {
        nav: { login: "साइन इन", try: "प्लेटफ़ॉर्म आज़माएं" },
        hero: {
            tag: "कृषि बुद्धिमत्ता प्लेटफ़ॉर्म",
            headline: ["हर किसान के लिए", "बेहतर निर्णय"],
            sub: "KisanMind कृषि अधिकारियों और सहकारी समितियों को रियल-टाइम फसल विश्लेषण, बाज़ार पूर्वानुमान और सरकारी योजनाओं की जानकारी एक ही जगह देता है।",
            cta: "प्लेटफ़ॉर्म एक्सेस करें",
        },

        features: {
            label: "KisanMind क्या करता है",
            headline: "छह क्षमताएं। एक प्लेटफ़ॉर्म।",
            sub: "जिला कृषि अधिकारियों, क्षेत्रीय सलाहकारों और उत्तर प्रदेश में किसान पोर्टफोलियो प्रबंधित करने वाली सहकारी समितियों के लिए बनाया गया।",
            items: [
                { icon: Leaf, title: "फसल रोग पहचान", desc: "पत्ती की फोटो अपलोड करें और तुरंत निदान पाएं — रोग का नाम, सटीकता स्कोर, गंभीरता और उपचार प्रोटोकॉल।" },
                { icon: TrendingUp, title: "बाज़ार मूल्य पूर्वानुमान", desc: "गेहूं, सरसों, आलू, मक्का और चावल के लिए 7 दिन का मूल्य अनुमान। सही समय पर बेचें।" },
                { icon: FileText, title: "सरकारी योजना पात्रता", desc: "किसानों को PM-KISAN, PMFBY, किसान क्रेडिट कार्ड और राज्य योजनाओं से स्वतः मिलाएं।" },
                { icon: Cloud, title: "मौसम व स्प्रे सलाह", desc: "7 दिन का IMD पूर्वानुमान — नो-स्प्रे विंडो, गर्मी चेतावनी और सिंचाई मार्गदर्शन।" },
                { icon: BarChart3, title: "सलाह रिपोर्ट", desc: "एक क्लिक में पूरी Crop Advisory Report तैयार करें। डाउनलोड करने योग्य और आधिकारिक उपयोग के लिए।" },
                { icon: LayoutDashboard, title: "जिला डैशबोर्ड", desc: "एक ही डैशबोर्ड से सभी किसानों, अलर्ट और लाभ वितरण पर नज़र रखें।" },
            ],
        },
        how: {
            label: "यह कैसे काम करता है",
            headline: "खेत से निर्णय तक — मिनटों में।",
            steps: [
                { n: "01", title: "किसान पंजीकृत करें", desc: "बुनियादी जानकारी दर्ज करें — ID, स्थान, फसल प्रकार और भूमि क्षेत्र। दो मिनट से कम।" },
                { n: "02", title: "फसल नमूना अपलोड करें", desc: "प्रभावित पत्ती या खेत की फोटो लें। प्लेटफ़ॉर्म छवि का विश्लेषण करके रोग, गंभीरता और सटीकता बताएगा।" },
                { n: "03", title: "पूरी रिपोर्ट प्राप्त करें", desc: "स्वास्थ्य, बाज़ार दृष्टिकोण, योजना पात्रता और मौसम सहित पूरी Crop Advisory Report तैयार।" },
            ],
        },
        audience: {
            label: "किनके लिए बना है",
            headline: "किसानों की सेवा करने वालों के लिए।",
            items: [
                { title: "जिला कृषि अधिकारी", desc: "पूरे जिले की निगरानी करें। अलर्ट, रिपोर्ट और योजना वितरण एक डैशबोर्ड पर।" },
                { title: "क्षेत्रीय सलाहकार (VLW)", desc: "किसानों के लिए ऑन-साइट फसल रिपोर्ट तैयार करें। सरल भाषा में उपचार मार्गदर्शन पाएं।" },
                { title: "किसान सहकारी समितियां", desc: "सदस्य खेतों में बाज़ार समय का समन्वय करें। प्रत्येक फसल के लिए सर्वोत्तम बिक्री विंडो पहचानें।" },
                { title: "राज्य कृषि विभाग", desc: "नीति रिपोर्टिंग और योजना प्रदर्शन निगरानी के लिए जिला-स्तरीय डेटा एकत्र करें।" },
            ],
        },
        cta: {
            headline: "आज ही KisanMind का उपयोग शुरू करें।",
            sub: "UP कृषि निदेशालय के तहत पंजीकृत कृषि अधिकारियों और सहकारी कर्मचारियों के लिए उपलब्ध।",
            btn: "प्लेटफ़ॉर्म में साइन इन करें",
        },
        footer: {
            copy: "KisanMind कृषि बुद्धिमत्ता प्लेटफ़ॉर्म",
        },
    },
};

type Lang = "en" | "hi";

export default function Landing({ onEnter }: { onEnter: () => void }) {
    const [lang, setLang] = useState<Lang>("en");
    const [realStats, setRealStats] = useState({ farmers: "-", reports: "-" });

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
        fetch(`${API}/stats`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setRealStats({
                        farmers: data.registered_farmers,
                        reports: data.reports_this_month
                    });
                }
            })
            .catch(() => {});
    }, []);

    const c = CONTENT[lang];
    const dynamicStats = [
        { value: realStats.farmers, label: lang === "en" ? "Registered Farmers" : "पंजीकृत किसान" },
        { value: realStats.reports, label: lang === "en" ? "Reports This Month" : "इस माह रिपोर्ट" },
    ];

    return (
        <div
            className="min-h-screen bg-white text-[#111]"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
            {/* ── Nav ── */}
            <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2C10 2 5 7 5 12C5 14.76 7.24 17 10 17C12.76 17 15 14.76 15 12C15 7 10 2 10 2Z"
                                fill="#2d5a1b" fillOpacity="0.15" stroke="#2d5a1b" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M10 17V19" stroke="#2d5a1b" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M10 8L13 11" stroke="#2d5a1b" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M10 10L7 12" stroke="#2d5a1b" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        <span className="text-[14px] font-semibold tracking-tight">
                            Kisan<span className="text-[#2d5a1b]">Mind</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Language toggle */}
                        <div className="flex items-center border border-[#e5e5e5] overflow-hidden" style={{ borderRadius: 2 }}>
                            {(["en", "hi"] as Lang[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors ${lang === l ? "bg-[#111] text-white" : "text-[#737373] hover:text-[#111]"}`}
                                >
                                    {l === "en" ? "EN" : "हि"}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={onEnter}
                            className="text-[12.5px] font-medium text-[#737373] hover:text-[#111] transition-colors px-1"
                        >
                            {c.nav.login}
                        </button>
                        <button
                            onClick={onEnter}
                            className="flex items-center gap-1.5 text-[12.5px] font-semibold bg-[#111] text-white px-3.5 py-1.5 hover:bg-[#2d5a1b] transition-colors"
                            style={{ borderRadius: 2 }}
                        >
                            {c.nav.try} <ArrowRight size={12} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left: copy */}
                        <div className="py-20 lg:py-28 lg:pr-16 border-b lg:border-b-0 lg:border-r border-[#e5e5e5]">
                            <div className="inline-flex items-center gap-2 border border-[#e5e5e5] px-3 py-1 mb-8" style={{ borderRadius: 2 }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a1b]" />
                                <span className="text-[11px] uppercase tracking-widest text-[#737373]">{c.hero.tag}</span>
                            </div>

                            <h1 className="text-[44px] sm:text-[52px] font-semibold tracking-tight leading-[1.08] text-[#111] mb-6">
                                {c.hero.headline[0]}<br />
                                <span className="text-[#2d5a1b]">{c.hero.headline[1]}</span>
                            </h1>

                            <p className="text-[15px] text-[#555] leading-[1.75] mb-10 max-w-[460px]">
                                {c.hero.sub}
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <button
                                    onClick={onEnter}
                                    className="flex items-center gap-2 bg-[#1a3310] text-white text-[13.5px] font-semibold px-5 py-3 hover:bg-[#2d5a1b] transition-colors"
                                    style={{ borderRadius: 2 }}
                                >
                                    {c.hero.cta} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Right: image */}
                        <div className="relative lg:pl-0 overflow-hidden" style={{ minHeight: 380 }}>
                            <img
                                src="https://images.unsplash.com/photo-1780938667725-302e3f7619fd?w=900&h=700&fit=crop&auto=format"
                                alt="Golden wheat field in Uttar Pradesh at harvest"
                                className="w-full h-full object-cover"
                                style={{ minHeight: 320 }}
                            />
                            {/* Overlay stat card */}
                            <div className="absolute bottom-6 left-6 bg-white border border-[#e5e5e5] px-4 py-3" style={{ borderRadius: 2 }}>
                                <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-1">Wheat · Agra Mandi</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[20px] font-semibold text-[#111]" style={{ fontFamily: "'DM Mono', monospace" }}>₹2,707</span>
                                    <span className="text-[12px] text-[#2d5a1b] font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>+10.5%</span>
                                </div>
                                <div className="text-[11px] text-[#a3a3a3] mt-0.5">7-day forecast · Jun 30, 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats strip ── */}
            <section className="border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2">
                        {dynamicStats.map((s, i) => (
                            <div
                                key={i}
                                className={`py-8 px-6 ${i === 0 ? "border-r border-[#e5e5e5]" : ""}`}
                            >
                                <div
                                    className="text-[28px] font-semibold text-[#111] tracking-tight"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-[12px] text-[#737373] mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="mb-14 max-w-xl">
                        <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-4">{c.features.label}</div>
                        <h2 className="text-[32px] font-semibold tracking-tight text-[#111] leading-tight mb-4">
                            {c.features.headline}
                        </h2>
                        <p className="text-[14px] text-[#555] leading-[1.75]">{c.features.sub}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#e5e5e5]">
                        {c.features.items.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className={`p-7 ${i % 3 !== 2 ? "lg:border-r border-[#e5e5e5]" : ""} ${i % 2 !== 1 ? "sm:border-r border-[#e5e5e5] lg:border-r-0" : ""} ${i >= 3 ? "border-t border-[#e5e5e5]" : ""} ${i === 1 || i === 3 || i === 5 ? "lg:border-r border-[#e5e5e5]" : ""} hover:bg-[#fafafa] transition-colors`}
                                >
                                    <div className="w-8 h-8 border border-[#e5e5e5] flex items-center justify-center mb-5" style={{ borderRadius: 2 }}>
                                        <Icon size={15} strokeWidth={1.5} className="text-[#2d5a1b]" />
                                    </div>
                                    <h3 className="text-[14px] font-semibold text-[#111] mb-2">{f.title}</h3>
                                    <p className="text-[13px] text-[#737373] leading-[1.7]">{f.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── How it works ── */}
            <section className="border-b border-[#e5e5e5] bg-[#fafafa]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="mb-14">
                        <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-4">{c.how.label}</div>
                        <h2 className="text-[32px] font-semibold tracking-tight text-[#111] leading-tight">
                            {c.how.headline}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#e5e5e5]">
                        {c.how.steps.map((s, i) => (
                            <div
                                key={i}
                                className={`p-8 bg-white ${i < 2 ? "lg:border-r border-[#e5e5e5]" : ""} ${i > 0 ? "border-t border-[#e5e5e5] lg:border-t-0" : ""}`}
                            >
                                <div
                                    className="text-[13px] font-semibold text-[#2d5a1b] mb-5"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {s.n}
                                </div>
                                <h3 className="text-[16px] font-semibold text-[#111] mb-3">{s.title}</h3>
                                <p className="text-[13px] text-[#737373] leading-[1.7]">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Platform preview strip ── */}
            <section className="border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-4">Report output</div>
                            <h2 className="text-[28px] font-semibold tracking-tight text-[#111] leading-tight mb-5">
                                Every report is a complete decision brief.
                            </h2>
                            <p className="text-[14px] text-[#555] leading-[1.75] mb-8">
                                A single Crop Advisory Report covers disease diagnosis, market timing, scheme eligibility, and weather — formatted like a government document, usable in the field.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Crop health with disease name, confidence %, and treatment steps",
                                    "14-day market price trend with 7-day forecast",
                                    "Government scheme eligibility with deadlines",
                                    "7-day weather with spray advisory windows",
                                    "Executive summary with prioritised actions",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#444]">
                                        <Check size={13} className="text-[#2d5a1b] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mock report card */}
                        <div className="border border-[#e5e5e5] bg-white p-6" style={{ borderRadius: 2 }}>
                            <div className="flex items-start justify-between mb-5 pb-5 border-b border-[#e5e5e5]">
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-1">Crop Advisory Report</div>
                                    <div className="text-[15px] font-semibold text-[#111]">Rajesh Kumar</div>
                                    <div className="text-[12px] text-[#737373]">Agra, UP · Wheat · 4.2 ha</div>
                                </div>
                                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5" style={{ borderRadius: 2 }}>
                                    Action Required
                                </span>
                            </div>

                            {[
                                { label: "Disease Detected", value: "Wheat Rust", badge: "95% confidence", badgeColor: "text-[#2d5a1b] bg-[#edf3e8] border-[#c5dbb8]" },
                                { label: "Market Forecast", value: "₹2,707 / qtl in 7 days", badge: "+10.5%", badgeColor: "text-[#2d5a1b] bg-[#edf3e8] border-[#c5dbb8]" },
                                { label: "Scheme Eligibility", value: "3 schemes matched", badge: "PMFBY urgent", badgeColor: "text-amber-700 bg-amber-50 border-amber-200" },
                                { label: "Weather Advisory", value: "No spray Jun 25–27", badge: "70% rain", badgeColor: "text-blue-700 bg-blue-50 border-blue-200" },
                            ].map((row, i) => (
                                <div key={i} className={`flex items-start justify-between py-3 ${i < 3 ? "border-b border-[#f0f0f0]" : ""}`}>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-0.5">{row.label}</div>
                                        <div className="text-[12.5px] font-medium text-[#111]">{row.value}</div>
                                    </div>
                                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 border flex-shrink-0 ml-4 mt-3 ${row.badgeColor}`} style={{ borderRadius: 2 }}>
                                        {row.badge}
                                    </span>
                                </div>
                            ))}

                            <button
                                onClick={onEnter}
                                className="mt-5 w-full flex items-center justify-center gap-2 text-[12.5px] font-semibold bg-[#111] text-white py-2.5 hover:bg-[#2d5a1b] transition-colors"
                                style={{ borderRadius: 2 }}
                            >
                                View Full Report <ChevronRight size={13} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Who it's for ── */}
            <section className="border-b border-[#e5e5e5] bg-[#fafafa]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="mb-14">
                        <div className="text-[10px] uppercase tracking-widest text-[#737373] mb-4">{c.audience.label}</div>
                        <h2 className="text-[32px] font-semibold tracking-tight text-[#111] leading-tight">
                            {c.audience.headline}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#e5e5e5]">
                        {c.audience.items.map((item, i) => (
                            <div
                                key={i}
                                className={`p-7 bg-white ${i % 2 === 0 ? "sm:border-r border-[#e5e5e5]" : ""} ${i >= 2 ? "border-t border-[#e5e5e5]" : ""}`}
                            >
                                <h3 className="text-[14px] font-semibold text-[#111] mb-2">{item.title}</h3>
                                <p className="text-[13px] text-[#737373] leading-[1.7]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="border-b border-[#e5e5e5]" style={{ backgroundColor: "#1a3310" }}>
                <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-[32px] font-semibold tracking-tight text-white leading-tight mb-4">
                        {c.cta.headline}
                    </h2>
                    <p className="text-[14px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "#8aab78" }}>
                        {c.cta.sub}
                    </p>
                    <button
                        onClick={onEnter}
                        className="inline-flex items-center gap-2 text-[13.5px] font-semibold bg-white text-[#1a3310] px-6 py-3 hover:bg-[#edf3e8] transition-colors"
                        style={{ borderRadius: 2 }}
                    >
                        {c.cta.btn} <ArrowRight size={14} />
                    </button>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="bg-white border-t border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2C10 2 5 7 5 12C5 14.76 7.24 17 10 17C12.76 17 15 14.76 15 12C15 7 10 2 10 2Z"
                                    fill="#2d5a1b" fillOpacity="0.2" stroke="#2d5a1b" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M10 17V19" stroke="#2d5a1b" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="text-[12px] font-semibold text-[#111]">KisanMind</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
