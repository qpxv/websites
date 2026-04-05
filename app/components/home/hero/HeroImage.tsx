import BrowserWindow from "./BrowserWindow";
import FloatingBookingBadge from "./FloatingBookingBadge";
import FloatingMetricBadge from "./FloatingMetricBadge";
import FloatingTestimonialBadge from "./FloatingTestimonialBadge";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 40%, var(--blue) 0%, transparent 70%)" }}
      />
      <BrowserWindow />
      <FloatingBookingBadge />
      <FloatingMetricBadge />
      <FloatingTestimonialBadge />
    </div>
  );
}
