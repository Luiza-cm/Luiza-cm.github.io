import React, { useEffect, useState } from 'react';
import './styles.css'

interface ContentCardProps {
  active: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const ContentCard: React.FC<ContentCardProps> = ({
  active,
  children
}) => {

  const [cardState, setCardState] = useState("hidden")

  useEffect(() => {
    if (cardState === "visible" && active === false) {
      setCardState("fading")
      setTimeout(() => setCardState("hidden"), 200)
    }


    if (cardState !== "visible" && active === true){
      setCardState("appearing")
      setTimeout(() => setCardState("visible"), 200)
    }
  }, [active, cardState])

  const fading = cardState==="fading"?" fading":"";
  const appearing = cardState==="appearing"?" appearing":"";

  return (
    <div className={`body-content ${fading} ${appearing}`} style={{display: cardState!=="hidden"?"block":"none"}}>
      {children}
    </div>
  );
}

export default ContentCard;

