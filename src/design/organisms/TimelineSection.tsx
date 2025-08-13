interface TimelineItem {
  id: string;
  title: string;
  description: string;
  reverse?: boolean;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
}

export function TimelineSection({ title, items }: TimelineSectionProps) {
  return (
    <section className="timeline1 cid-r0vscTmYJX" id="timeline1-14">
      <div className="container align-center">
        <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">{title}</h2>
        <div className="container timelines-container">
          {items.map((item) => (
            <div key={item.id} className={`row timeline-element ${item.reverse ? 'reverse' : ''} separline`}>
              <div className={`timeline-date-panel col-xs-12 col-md-6 ${item.reverse ? ' align-left' : ' align-right'}`}>
                <div className="time-line-date-content"></div>
              </div>
              <span className="iconBackground"></span>
              <div className={`col-xs-12 col-md-6 ${item.reverse ? ' align-right' : ' align-left'}`}>
                <div className="timeline-text-content">
                  <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">{item.title}</h4>
                  <p className="mbr-timeline-text mbr-fonts-style display-7">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


