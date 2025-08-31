import singer from "./assets/Images/singer.jpg";
import singer2 from "./assets/Images/singer2.jpg";
import drummer from "./assets/Images/drummer2.jpg";

function Bio() {
  return (
    <>
      <section className="bioSection">
        <div className="bioWrapper">
          <div className="bioTitle">
            <h1>biography</h1>
          </div>

          <div className="imageWrapper">
            <div className="image">
              <img src={singer} alt="" />
              <img src={singer2} alt="" />
            </div>
          </div>

          <div className="image1">
            <img src={drummer} alt="" />
          </div>
          <div className="theStory">
            <h1>- Nobody's Burden : The Story</h1>
            <p>
              Nobody’s Burden is a Filipino metal band forged in the underground
              scene, born from a shared hunger for heavy riffs, raw emotion, and
              unfiltered self-expression. Emerging from small jam sessions and
              late-night practices, the band quickly carved out their sound — a
              mix of bone-crushing breakdowns, sharp guitar work, and guttural
              vocals that echo the frustrations and resilience of everyday life.
              Carrying the name Nobody’s Burden as a statement of defiance, the
              band refuses to be weighed down by labels or expectations.
              Instead, they channel their struggles, personal battles, and
              social realities into their music, turning pain into power and
              chaos into catharsis. Though not yet mainstream, the band has
              built its presence through local gigs, intimate venues, and the
              unwavering support of fellow metalheads in the community.
              <br />
              <br /> Every performance is a storm — fueled by intensity, unity,
              and a passion that transcends the stage. For Nobody’s Burden,
              music isn’t about fame. It’s about brotherhood, honesty, and
              keeping the fire of Filipino metal alive. Their story is still
              being written, and each song they release is a new chapter in
              their fight to be heard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bio;
