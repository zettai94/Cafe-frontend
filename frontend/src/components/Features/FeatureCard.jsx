import { features } from "./Featured";

export default function FeatureCard() { 
  return (
    <section id="features"className="features container">
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="features-item">
            <div className="feature-icon">
              <ion-icon name={item.icon.split('"')[1]}></ion-icon>
            </div>
            <div className="feature-title">
              <h3>{item.title}</h3>
            </div>
            <div className="feature-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}