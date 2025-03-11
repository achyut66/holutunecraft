import React from "react";
// import "../../css/singingbowlguide.css";
const SingingBowlGuide = () => {
    return (
        <div className="guide-container">
            <div className="singing-row">
                <div className="col">
                    <h2>How should I clean my singing bowl?</h2>
                    <p>
                        Clean your singing bowl with a soft cloth. Avoid
                        abrasive cleaners and ensure it is completely dry before
                        use. To learn everything about how to clean your singing
                        bowl properly.
                    </p>
                </div>
                <div className="col">
                    <h2>How should I store my singing bowl when not in use?</h2>
                    <p>
                        Store your singing bowl in a cool, dry place away from
                        direct sunlight and moisture. It’s best to keep it on a
                        soft surface or in a padded bag to protect it from
                        scratches and other damage.
                    </p>
                </div>
            </div>
            <div className="singing-row">
                <div className="col">
                    <h2>How do I start playing a singing bowl?</h2>
                    <p>
                        <li>
                            <span style={{ fontWeight: "bold" }}>
                                Focus on Your Breath:
                            </span>{" "}
                            Breath is crucial for awareness and connection.
                        </li>
                        <li>
                            <span style={{ fontWeight: "bold" }}>
                                Hold the Bowl Properly:
                            </span>{" "}
                            Hold the bowl in the palm of your hand without
                            touching the sides.
                        </li>
                        <li>
                            <span style={{ fontWeight: "bold" }}>
                                Strike the Rim:
                            </span>{" "}
                            Gently strike the rim of the bowl with the mallet.
                        </li>
                        <li>
                            <span style={{ fontWeight: "bold" }}>
                                Run the Mallet Around the Rim:
                            </span>{" "}
                            Move the mallet around the rim with balanced
                            pressure. Different pressures can affect the sound,
                            causing it to become loud or stop if not balanced.
                        </li>
                        <li>
                            <span style={{ fontWeight: "bold" }}>
                                TIPS: Chant for Enhanced Effect
                            </span>{" "}
                            Chant "OM" along with the bowl's note to instantly
                            shift to a more relaxed and calm frequency.
                        </li>
                    </p>
                </div>
                <div className="col">
                    <h2>Can I use my singing bowl for meditation?</h2>
                    <p>
                        Absolutely! Singing bowls are perfect for meditation.
                        Their soothing tones can help you focus and achieve a
                        deeper meditative state.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingingBowlGuide;
