(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Navbar({ activeSection }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuItems = [
        {
            label: 'Projects',
            href: '#projects'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Contact',
            href: '#contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
                                    children: "AI Showcase"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-foreground/50 ml-2",
                                    children: "Gemini 2.0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors",
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "md:hidden p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 flex flex-col justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-0.5 w-full bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-0.5 w-full bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-0.5 w-full bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pb-4 flex flex-col gap-4",
                    children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors",
                            onClick: ()=>setIsOpen(false),
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Hero({ onSectionChange }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setIsVisible(true);
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center pt-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent",
                                        children: "AI-Generated Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-foreground",
                                        children: "Powered by Gemini Flash 2.0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed",
                                children: "Showcase koleksi website HTML/CSS yang di-generate secara otomatis menggunakan Google Gemini Flash 2.0. Setiap project dibuat dengan AI yang menghasilkan design unik dan modern setiap 30 menit."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-3 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium",
                                        children: "🤖 Gemini Flash 2.0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium",
                                        children: "⚡ Auto-Generated"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-medium",
                                        children: "🎨 Unique Designs"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium",
                                        children: "⏱️ Every 30 Minutes"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#projects",
                                        onClick: ()=>onSectionChange('projects'),
                                        className: "px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all",
                                        children: "View Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:stinart123@gmail.com",
                                        className: "px-8 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-foreground/5 transition-all",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-foreground/50",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Hero, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function About({ onSectionChange }) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        onClick: ()=>onSectionChange('about'),
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold mb-6",
                                children: [
                                    "Powered by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500",
                                        children: "Gemini Flash 2.0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 31,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/70 text-lg mb-4 leading-relaxed",
                                children: "Semua project di showcase ini di-generate secara otomatis menggunakan Google Gemini Flash 2.0, model AI terbaru yang menghasilkan HTML/CSS unik dengan design modern dan responsif."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/70 text-lg mb-8 leading-relaxed",
                                children: "Setiap 30 menit, AI worker akan generate project baru dengan tema, style, dan konten yang berbeda-beda, menciptakan koleksi website yang terus berkembang."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 p-6 bg-foreground/5 rounded-xl border border-foreground/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-4 text-foreground",
                                        children: "⚙️ Spesifikasi Generate"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "AI Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "Gemini 2.5 Flash / 2.0 Flash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "Temperature"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "0.7 (Creative)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "Max Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "4,000 tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "Generate Interval"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "30 menit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "Default Theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "Modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground/60 mb-1",
                                                        children: "Default Style"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "Gradient"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: [
                                    'AI-Powered Generation',
                                    'Unique Designs Every Time',
                                    'Responsive & Modern',
                                    'Auto-Updated Showcase'
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/80",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl mb-4",
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 font-semibold mb-2",
                                                children: "Google Gemini Flash 2.0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/50 text-sm",
                                                children: "AI-Powered HTML/CSS Generation"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-xs space-y-2 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/60",
                                                        children: "Model:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-medium",
                                                        children: "gemini-2.5-flash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/60",
                                                        children: "Temperature:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-medium",
                                                        children: "0.7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/60",
                                                        children: "Max Tokens:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-medium",
                                                        children: "4,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/60",
                                                        children: "Output:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-medium",
                                                        children: "HTML + CSS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(About, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ProjectCard({ project }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewHtml, setPreviewHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [previewCss, setPreviewCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [previewLoaded, setPreviewLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectCard.useEffect": ()=>{
            // Load preview from API - ensure CSS is always loaded
            if (project.id) {
                // Try API route first
                fetch(`/api/projects/${project.id}`).then({
                    "ProjectCard.useEffect": (res)=>{
                        if (!res.ok) throw new Error(`API returned ${res.status}`);
                        return res.json();
                    }
                }["ProjectCard.useEffect"]).then({
                    "ProjectCard.useEffect": (data)=>{
                        if (data.html) {
                            // Ensure CSS is always present
                            const css = data.css || '';
                            console.log(`✅ Loaded preview for project ${project.id}`, {
                                htmlLength: data.html.length,
                                cssLength: css.length,
                                hasCss: css.length > 0
                            });
                            setPreviewHtml(data.html);
                            setPreviewCss(css); // Always set CSS, even if empty
                            setPreviewLoaded(true);
                        } else {
                            console.warn(`No HTML content for project ${project.id}`);
                        }
                    }
                }["ProjectCard.useEffect"]).catch({
                    "ProjectCard.useEffect": (error)=>{
                        console.warn(`API route failed for ${project.id}, trying static files:`, error);
                        // If API fails, try fetching from static files
                        Promise.all([
                            fetch(`/projects/${project.id}/index.html`).catch({
                                "ProjectCard.useEffect": ()=>null
                            }["ProjectCard.useEffect"]),
                            fetch(`/projects/${project.id}/style.css`).catch({
                                "ProjectCard.useEffect": ()=>null
                            }["ProjectCard.useEffect"])
                        ]).then({
                            "ProjectCard.useEffect": ([htmlRes, cssRes])=>{
                                if (htmlRes && htmlRes.ok) {
                                    htmlRes.text().then({
                                        "ProjectCard.useEffect": (html)=>{
                                            // Always try to get CSS
                                            let css = '';
                                            if (cssRes && cssRes.ok) {
                                                cssRes.text().then({
                                                    "ProjectCard.useEffect": (cssText)=>{
                                                        css = cssText;
                                                        console.log(`✅ Loaded preview from static files for project ${project.id}`, {
                                                            htmlLength: html.length,
                                                            cssLength: css.length,
                                                            hasCss: css.length > 0
                                                        });
                                                        setPreviewHtml(html);
                                                        setPreviewCss(css);
                                                        setPreviewLoaded(true);
                                                    }
                                                }["ProjectCard.useEffect"]).catch({
                                                    "ProjectCard.useEffect": ()=>{
                                                        // CSS fetch failed, but continue with HTML
                                                        console.warn(`CSS fetch failed for ${project.id}, continuing without CSS`);
                                                        setPreviewHtml(html);
                                                        setPreviewCss('');
                                                        setPreviewLoaded(true);
                                                    }
                                                }["ProjectCard.useEffect"]);
                                            } else {
                                                // No CSS response, but continue with HTML
                                                console.warn(`No CSS file for ${project.id}, continuing without CSS`);
                                                setPreviewHtml(html);
                                                setPreviewCss('');
                                                setPreviewLoaded(true);
                                            }
                                        }
                                    }["ProjectCard.useEffect"]);
                                } else {
                                    console.warn(`Failed to load static files for ${project.id}`);
                                }
                            }
                        }["ProjectCard.useEffect"]);
                    }
                }["ProjectCard.useEffect"]);
            }
        }
    }["ProjectCard.useEffect"], [
        project.id
    ]);
    const title = project.title || project.name;
    const description = project.description || project.preview || 'AI Generated Project';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/project/${project.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            className: "group relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-card to-card border border-border transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full overflow-hidden bg-background",
                    children: [
                        previewLoaded && previewHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                srcDoc: (()=>{
                                    // Process HTML to inject CSS
                                    let htmlWithCss = previewHtml;
                                    // Remove external CSS link
                                    htmlWithCss = htmlWithCss.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');
                                    // Extract body content
                                    const bodyMatch = htmlWithCss.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
                                    const bodyContent = bodyMatch ? bodyMatch[1] : htmlWithCss;
                                    // Create complete HTML with CSS - ALWAYS include CSS
                                    // Ensure CSS is always present, even if empty
                                    const cssContent = previewCss || '/* No CSS available */';
                                    const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; }
    ${cssContent}
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
                                    return fullHtml;
                                })(),
                                className: "absolute top-0 left-0 border-0 pointer-events-none",
                                style: {
                                    transform: 'scale(0.35)',
                                    transformOrigin: 'top left',
                                    width: '285%',
                                    height: '285%',
                                    minWidth: '100%',
                                    minHeight: '100%',
                                    backgroundColor: 'transparent'
                                },
                                title: `Preview of ${project.name}`,
                                sandbox: "allow-same-origin",
                                loading: "lazy",
                                onLoad: ()=>{
                                    console.log(`✅ Iframe loaded for project ${project.id}`);
                                },
                                onError: (e)=>{
                                    console.error(`❌ Iframe error for project ${project.id}:`, e);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl opacity-50 animate-pulse",
                                    children: "🎨"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                !previewLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 left-1/2 transform -translate-x-1/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-foreground/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-purple-500 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: '0ms'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-pink-500 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: '150ms'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-purple-500 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: '300ms'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none z-10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 flex flex-col justify-end p-6 transition-all duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-90'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`,
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-foreground line-clamp-1",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        project.displayDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-foreground/50 mt-1",
                                            children: project.displayDate
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-foreground/70 text-sm leading-relaxed transition-all duration-300 ${isHovered ? 'line-clamp-3' : 'line-clamp-2'}`,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-wrap gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`,
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 text-xs bg-foreground/10 text-foreground/70 rounded-md border border-foreground/10",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `w-full mt-4 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`,
                                children: "View Project"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "GosA+HCJHE2HWm9zPGXPRmApWgo=");
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/project-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Projects({ onSectionChange }) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalProjects, setTotalProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const projectsPerPage = 6;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            async function fetchProjects() {
                try {
                    setLoading(true);
                    const response = await fetch(`/api/projects?page=${currentPage}&limit=${projectsPerPage}`);
                    const data = await response.json();
                    setProjects(data.projects || []);
                    setTotalPages(data.pagination?.totalPages || 1);
                    setTotalProjects(data.pagination?.total || 0);
                    // Scroll to top of projects section when page changes
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    console.error('Error fetching projects:', error);
                    setProjects([]);
                } finally{
                    setLoading(false);
                }
            }
            fetchProjects();
        }
    }["Projects.useEffect"], [
        currentPage
    ]);
    // Generate color gradient based on index
    const getColorGradient = (index)=>{
        const gradients = [
            'from-purple-500 to-pink-500',
            'from-pink-500 to-red-500',
            'from-red-500 to-orange-500',
            'from-orange-500 to-yellow-500',
            'from-yellow-500 to-green-500',
            'from-green-500 to-blue-500',
            'from-blue-500 to-indigo-500',
            'from-indigo-500 to-purple-500'
        ];
        return gradients[index % gradients.length];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: ref,
        onClick: ()=>onSectionChange('projects'),
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-foreground/2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-16 transform transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: "Featured Projects"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 text-lg mb-4",
                            children: "Koleksi website HTML/CSS yang di-generate otomatis oleh Gemini Flash 2.0. Setiap project memiliki design unik dan modern."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full",
                                    children: "🤖 Powered by Gemini Flash 2.0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full",
                                    children: "⚡ Auto-Generated Every 30 Minutes"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full",
                                    children: "🎨 Unique Designs"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-foreground/60",
                            children: "Loading projects..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this) : projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/60 text-lg",
                        children: "No projects found. Projects will appear here once generated."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transform transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                                    style: {
                                        transitionDelay: inView ? `${index * 100}ms` : '0ms'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: {
                                            ...project,
                                            category: 'AI Generated',
                                            tags: [
                                                'HTML',
                                                'CSS',
                                                'AI'
                                            ],
                                            color: getColorGradient(index)
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)
                                }, project.id, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-foreground/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Showing ",
                                            (currentPage - 1) * projectsPerPage + 1,
                                            " to ",
                                            Math.min(currentPage * projectsPerPage, totalProjects),
                                            " of ",
                                            totalProjects,
                                            " projects"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                            disabled: currentPage === 1,
                                            className: `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${currentPage === 1 ? 'bg-foreground/10 text-foreground/30 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: Array.from({
                                                length: totalPages
                                            }, (_, i)=>i + 1).map((pageNum)=>{
                                                // Show first page, last page, current page, and pages around current
                                                const showPage = pageNum === 1 || pageNum === totalPages || pageNum >= currentPage - 1 && pageNum <= currentPage + 1;
                                                if (!showPage) {
                                                    // Show ellipsis
                                                    if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 text-foreground/40",
                                                            children: "..."
                                                        }, pageNum, false, {
                                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 29
                                                        }, this);
                                                    }
                                                    return null;
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage(pageNum),
                                                    className: `w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${currentPage === pageNum ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110' : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20 hover:scale-105'}`,
                                                    children: pageNum
                                                }, pageNum, false, {
                                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                            disabled: currentPage === totalPages,
                                            className: `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${currentPage === totalPages ? 'bg-foreground/10 text-foreground/30 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'}`,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(Projects, "quHzIFcxS9CLZn3xCGaVYwV4QG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Contact({ onSectionChange }) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: ref,
        onClick: ()=>onSectionChange('contact'),
        className: "py-20 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-center mb-12 transform transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "About This Showcase"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/60 text-lg mb-6",
                        children: "Website ini menampilkan koleksi project HTML/CSS yang di-generate secara otomatis oleh AI menggunakan Google Gemini Flash 2.0. Setiap project dibuat dengan spesifikasi yang sama untuk menghasilkan variasi design yang unik."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-foreground/5 rounded-xl p-6 border border-foreground/10 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4 text-foreground",
                                children: "🔧 Technical Specifications"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "AI Model"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "Google Gemini 2.5 Flash / 2.0 Flash"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Temperature"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "0.7 (Creative Mode)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Max Output Tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "4,000 tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Generation Interval"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "Every 30 minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Default Theme"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "Modern"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Default Style"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "Gradient"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Output Format"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "HTML + CSS (Separated)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 mb-1",
                                                children: "Responsive"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: "Yes (Mobile-first)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60 text-sm mb-4",
                                children: "Semua project di-generate menggunakan AI Worker yang berjalan secara otomatis. Setiap generate menghasilkan design yang berbeda-beda dengan tema dan style yang unik."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/MarioSitepu",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm font-medium hover:bg-purple-500/20 transition-colors",
                                        children: "👤 GitHub Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://aistudio.google.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-lg text-sm font-medium hover:bg-pink-500/20 transition-colors",
                                        children: "🌐 Gemini AI Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:stinart123@gmail.com",
                                        className: "px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors",
                                        children: "📧 Contact Me"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Contact, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
                                    children: "AI Showcase"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/60 text-sm mb-3",
                                    children: "Showcase koleksi website HTML/CSS yang di-generate secara otomatis menggunakan Google Gemini Flash 2.0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs",
                                            children: "🤖 Gemini 2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded text-xs",
                                            children: "⚡ Auto-Gen"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4 text-foreground",
                                    children: "AI Specifications"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Model: Gemini 2.5/2.0 Flash"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Temperature: 0.7"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Max Tokens: 4,000"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Interval: 30 minutes"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4 text-foreground",
                                    children: "Generation"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Theme: Modern"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Style: Gradient"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Output: HTML + CSS"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Format: Responsive"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4 text-foreground",
                                    children: "Links"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#about",
                                                className: "hover:text-foreground transition-colors",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#projects",
                                                className: "hover:text-foreground transition-colors",
                                                children: "Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://aistudio.google.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-foreground transition-colors",
                                                children: "Gemini AI Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/MarioSitepu",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-foreground transition-colors",
                                                children: "GitHub Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/MarioSitepu/Jack-s-Cards",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-foreground transition-colors",
                                                children: "Repository"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "© ",
                                        currentYear,
                                        " AI-Generated Projects Showcase. Powered by Google Gemini Flash 2.0"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2",
                                    children: [
                                        "Created by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/MarioSitepu",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-purple-500 hover:text-purple-400 transition-colors font-medium",
                                            children: "@MarioSitepu"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 mt-4 md:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground/40",
                                children: "Auto-generated every 30 minutes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$about$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/about.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/components/footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background text-foreground overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeSection: activeSection
            }, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSectionChange: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$about$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSectionChange: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSectionChange: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSectionChange: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Belajar$2f$JacksPlayCards$2f$Project$2d$Showcase$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Belajar/JacksPlayCards/Project-Showcase/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Home, "TYoZCGaAhit399zWDnb1fWhVA4A=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Belajar_JacksPlayCards_Project-Showcase_640d4f07._.js.map