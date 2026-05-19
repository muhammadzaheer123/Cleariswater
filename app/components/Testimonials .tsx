"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────
interface Review {
  _id?: string;
  id?: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  tag: string;
  ts: number;
}

// ─── Seed review (shown until DB loads) ──────────────────
const SEED: Review = {
  id: "seed-1",
  name: "Muhammad Zaheer",
  role: "Karachi",
  text: "Clearis has completely changed how I think about hydration. The purity is unmatched — you can taste the difference from the very first sip.",
  rating: 5,
  tag: "PURITY",
  ts: Date.now() - 86400000,
};

// ─── Helpers ─────────────────────────────────────────────
const getTag = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes("pure") || t.includes("clean") || t.includes("taste"))
    return "PURITY";
  if (t.includes("health") || t.includes("mineral") || t.includes("ph"))
    return "HEALTH";
  if (t.includes("train") || t.includes("sport") || t.includes("energy"))
    return "PERFORMANCE";
  if (t.includes("refresh") || t.includes("crisp")) return "REFRESHING";
  return "QUALITY";
};

const calcAvg = (reviews: Review[]) =>
  reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

const getId = (r: Review) => r._id || r.id || "";

// ─── Stars ───────────────────────────────────────────────
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < rating ? "#1E90FF" : "rgba(255,255,255,0.12)"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Review Card ─────────────────────────────────────────
function ReviewCard({ review, isNew }: { review: Review; isNew?: boolean }) {
  return (
    <div
      className={`group relative border rounded-2xl p-7 overflow-hidden transition-all duration-500
      ${
        isNew
          ? "border-[#1E90FF]/50 bg-[#1E90FF]/5"
          : "border-white/[0.07] bg-white/[0.02] hover:border-[#1E90FF]/30 hover:bg-[#1E90FF]/[0.03]"
      }`}
    >
      <span className="absolute top-5 right-6 text-[64px] font-black text-white/[0.025] leading-none select-none pointer-events-none">
        {review.name.charAt(0)}
      </span>
      <span
        className={`inline-block text-[9px] tracking-[4px] font-bold px-3 py-1 rounded-full border mb-5 uppercase
        ${isNew ? "text-[#1E90FF] border-[#1E90FF]/30 bg-[#1E90FF]/10" : "text-white/30 border-white/10"}`}
      >
        {review.tag}
      </span>
      <blockquote className="text-white/75 text-sm leading-[1.75] mb-6 pl-5 relative">
        <span className="absolute left-0 -top-1 text-3xl text-[#1E90FF]/25 font-serif leading-none">
          "
        </span>
        {review.text}
      </blockquote>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
            ${isNew ? "bg-[#1E90FF] text-white" : "bg-white/10 text-white/50"}`}
          >
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-white text-xs font-semibold">{review.name}</p>
            <p className="text-white/35 text-[11px] mt-0.5">{review.role}</p>
          </div>
        </div>
        <Stars rating={review.rating} size={12} />
      </div>
    </div>
  );
}

// ─── Read More Button ────────────────────────────────────
function ReadMoreBtn({
  hidden,
  showAll,
  onClick,
}: {
  hidden: number;
  showAll: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative flex justify-center mt-8 mb-14">
      {/* Fade gradient over last card row */}
      {!showAll && (
        <div className="absolute -top-28 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      )}
      <button
        onClick={onClick}
        className="group relative flex items-center gap-3 border border-white/10 rounded-full px-8 py-3.5
          text-sm text-white/50 hover:text-white hover:border-[#1E90FF]/40
          bg-white/[0.02] hover:bg-[#1E90FF]/[0.05] backdrop-blur-sm
          transition-all duration-300"
      >
        {showAll ? (
          <>
            <svg
              className="w-3.5 h-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span>Show Less</span>
          </>
        ) : (
          <>
            <span>
              Read {hidden} More Review{hidden !== 1 ? "s" : ""}
            </span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
const SHOW_INITIAL = 4;

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [liveCount, setLiveCount] = useState(0); // new reviews arrived via SSE

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ── Fetch initial reviews ──────────────────────────────
  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      if (data.ok) setReviews([SEED, ...data.reviews]);
      else setReviews([SEED]);
    } catch {
      setReviews([SEED]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // ── Real-time SSE listener ─────────────────────────────
  useEffect(() => {
    const es = new EventSource("/api/reviews/stream");

    es.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);

        if (payload.type === "new_review") {
          const incoming: Review = payload.review;
          const incomingId = getId(incoming);

          setReviews((prev) => {
            // avoid duplicates
            if (prev.some((r) => getId(r) === incomingId)) return prev;
            // insert after SEED (index 0), before the rest
            return [prev[0], incoming, ...prev.slice(1)];
          });

          setNewIds((prev) => new Set(prev).add(incomingId));
          setLiveCount((c) => c + 1);

          // remove "new" highlight after 8s
          setTimeout(() => {
            setNewIds((prev) => {
              const next = new Set(prev);
              next.delete(incomingId);
              return next;
            });
          }, 8000);
        }
      } catch {
        /* ignore parse errors */
      }
    };

    return () => es.close();
  }, []);

  // ── GSAP scroll animations ─────────────────────────────
  useEffect(() => {
    if (loading) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".t-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".t-cards-grid", start: "top 80%" },
        },
      );
      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        statsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 88%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [loading]);

  // ── Submit ─────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!name.trim() || text.trim().length < 10 || !rating) return;
    setSubmitting(true);
    setError("");

    try {
      const payload = {
        name: name.trim(),
        role: role.trim() || "Clearis Customer",
        text: text.trim(),
        rating,
        tag: getTag(text),
        ts: Date.now(),
      };

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);

      // SSE will auto-push it back — but also add locally for instant feedback
      const newReview: Review = { ...payload, _id: data.id };
      setReviews((prev) => [prev[0], newReview, ...prev.slice(1)]);
      setNewIds((prev) => new Set(prev).add(data.id));

      setName("");
      setRole("");
      setText("");
      setRating(0);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Derived values ─────────────────────────────────────
  const avgRating = calcAvg(reviews);
  const totalCount = Math.max(15, reviews.length);
  const displayed = showAll ? reviews : reviews.slice(0, SHOW_INITIAL);
  const hiddenCount = reviews.length - SHOW_INITIAL;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] py-32 overflow-hidden"
    >
      {/* BG decoration */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E90FF 1px,transparent 1px),linear-gradient(90deg,#1E90FF 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1E90FF]/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E90FF]/40 to-transparent" />

      <div className="relative z-10 mx-auto w-[85%]">
        {/* ── Heading ── */}
        <div ref={headingRef} className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-7 h-px bg-[#1E90FF]" />
            <span className="text-[10px] tracking-[5px] text-[#1E90FF] uppercase font-semibold">
              Customer Reviews
            </span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-5">
            <h2 className="font-space text-[clamp(52px,8vw,88px)] font-medium leading-[0.88] tracking-[-3px] text-white">
              REAL
              <br />
              <span className="text-[#1E90FF]">VOICES.</span>
            </h2>
            <div className="flex items-center gap-3 border border-white/10 rounded-full px-5 py-3 bg-white/[0.03] backdrop-blur-sm">
              <Stars rating={5} size={15} />
              <span className="text-white font-semibold text-sm">
                {avgRating}
              </span>
              <span className="text-white/35 text-xs">
                {totalCount}+ reviews
              </span>
              {/* Live indicator */}
              {liveCount > 0 && (
                <span className="flex items-center gap-1.5 ml-1 text-[#1E90FF] text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] animate-pulse" />
                  Live
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        {loading ? (
          <div className="flex items-center gap-3 text-white/30 text-sm py-10 mb-10">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]/50 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
            <span>Loading reviews...</span>
          </div>
        ) : (
          <div className="relative">
            <div className="t-cards-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
              {displayed.map((r) => (
                <div key={getId(r)} className="t-card">
                  <ReviewCard review={r} isNew={newIds.has(getId(r))} />
                </div>
              ))}
            </div>

            {hiddenCount > 0 && (
              <ReadMoreBtn
                hidden={hiddenCount}
                showAll={showAll}
                onClick={() => setShowAll((v) => !v)}
              />
            )}
            {hiddenCount <= 0 && <div className="mb-12" />}
          </div>
        )}

        {/* ── Submit Form ── */}
        <div
          ref={formRef}
          className="relative border border-white/[0.08] rounded-2xl p-8 md:p-10 bg-white/[0.02] overflow-hidden mb-10"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E90FF]/35 to-transparent" />

          <h3 className="font-space text-2xl font-medium tracking-[-1px] text-white mb-1">
            SHARE YOUR EXPERIENCE
          </h3>
          <p className="text-white/35 text-sm mb-8">
            Tried Clearis Water? Let the world know how it felt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name *"
              maxLength={40}
              className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#1E90FF]/40 focus:bg-[#1E90FF]/[0.04] transition-all"
            />
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="City / Profession (optional)"
              maxLength={50}
              className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#1E90FF]/40 focus:bg-[#1E90FF]/[0.04] transition-all"
            />
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your honest review... (min 10 characters)"
            maxLength={300}
            rows={3}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/25 focus:border-[#1E90FF]/40 focus:bg-[#1E90FF]/[0.04] transition-all resize-none mb-5"
          />

          <div className="flex items-center gap-3 mb-7">
            <span className="text-[11px] text-white/35 tracking-wider uppercase">
              Rating
            </span>
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(i + 1)}
                className="text-[26px] leading-none transition-transform hover:scale-110"
                style={{
                  color:
                    i < (hover || rating)
                      ? "#1E90FF"
                      : "rgba(255,255,255,0.12)",
                }}
              >
                ★
              </button>
            ))}
            {rating > 0 && (
              <span className="text-[11px] text-[#1E90FF] ml-1">
                {["", "Poor", "Fair", "Good", "Great", "Excellent"][rating]}
              </span>
            )}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <button
              onClick={handleSubmit}
              disabled={
                submitting || !name.trim() || text.trim().length < 10 || !rating
              }
              className="group relative overflow-hidden rounded-full bg-[#1E90FF] px-8 py-3.5 text-sm text-white font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
            >
              <span className="relative z-10">
                {submitting ? "Submitting..." : "Submit Review"}
              </span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0 group-disabled:hidden" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-[#0a0a0a] text-sm font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-disabled:hidden">
                Submit Review
              </span>
            </button>
            {success && (
              <span className="text-[#1E90FF] text-sm font-medium">
                ✓ &nbsp;Thank you! Your review is live.
              </span>
            )}
            {error && <span className="text-red-400 text-sm">{error}</span>}
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {[
            { val: `${totalCount}+`, lbl: "Happy Customers", color: "#1E90FF" },
            { val: avgRating, lbl: "Average Rating", color: "white" },
            { val: "99.9%", lbl: "Satisfaction Rate", color: "#1E90FF" },
          ].map((s, i) => (
            <div
              key={i}
              className={`py-6 sm:py-8 px-6 text-center transition-colors duration-300 hover:bg-[#1E90FF]/5
              ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-white/[0.08]" : ""}`}
            >
              <p
                className="font-space text-[clamp(28px,6vw,52px)] sm:text-[clamp(28px,4.5vw,52px)] font-bold leading-none tracking-tight mb-2"
                style={{ color: s.color }}
              >
                {s.val}
              </p>
              <p className="text-[10px] tracking-[3px] text-white/35 uppercase">
                {s.lbl}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
