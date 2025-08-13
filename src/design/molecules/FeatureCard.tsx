interface FeatureCardProps {
  icon?: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, image, className = 'col-12 col-md-6 col-lg-3' }: FeatureCardProps) {
  return (
    <div className={`card p-3 ${className}`}>
      <div className="card-wrapper">
        {image && (
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        )}
        {icon && (
          <div className="icon-block">
            <span className={`mbr-iconfont ${icon}`}></span>
          </div>
        )}
        <div className="card-box">
          <h4 className="card-title mbr-fonts-style display-7">{title}</h4>
          {description && <p className="mbr-text mbr-fonts-style display-7">{description}</p>}
        </div>
      </div>
    </div>
  );
}


