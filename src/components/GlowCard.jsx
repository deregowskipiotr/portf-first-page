import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the rotation angles from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360; // Normalize angle to [0, 360]

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl p-1 mb-1"
    >      
      <div className="mb-1">
        <p className="text-white-50 text-xl md:text-2xl md:ml-4 md:mt-2">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
