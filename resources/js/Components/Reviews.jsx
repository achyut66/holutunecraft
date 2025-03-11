import React from "react";

const ReviewsComponent = () => {
    // Dummy data for ratings (1 to 5 stars)
    const rating = 5; // This would be dynamic based on actual review data

    // Function to render star rating with Unicode
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{
                        color: i <= rating ? "#ffcc00" : "#ccc", // Yellow for filled, gray for empty
                        fontSize: "20px", // Adjust star size
                        marginRight: "5px", // Space between stars
                    }}
                >
                    {i <= rating ? "★" : "☆"}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="review-container">
            <div className="review-block">
                <div className="review-row">
                    <div className="col-sm-3">
                        <img
                            src="../assets/images/7chakra.jpg"
                            className="img-rounded"
                            alt="Reviewer"
                        />
                        <div className="review-block-name">
                            <a href="#">&nbsp;Ganesh Silwal</a>
                        </div>
                        <div className="review-block-date">
                            January 29, 2016
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="review-block-title">
                            7 Chakra Singing Bowl
                        </div>
                        <div className="review-block-description">
                            I recently purchased the 7 Chakra Singing Bowl and I
                            must say, it has been an incredibly transformative
                            addition to my meditation practice. The
                            craftsmanship is impeccable – the bowl has a
                            beautiful, rich design that incorporates the seven
                            chakra symbols, each corresponding to a different
                            energy center of the body. When I first struck the
                            bowl, the sound was absolutely mesmerizing. The
                            vibrations filled the room, and I could feel the
                            resonance deeply, especially around my heart and
                            throat areas. The soothing tones seem to encourage
                            deep relaxation and promote a sense of calmness that
                            is perfect for meditation, yoga, or even just
                            unwinding after a long day. The sound quality is
                            top-notch. Each tone produced by the bowl resonates
                            clearly and distinctly, reflecting the vibrational
                            frequency associated with each chakra. It’s
                            remarkable how each note helps to balance and align
                            the body’s energy centers, which I noticed right
                            away. I also use the bowl during sound healing
                            sessions, and my clients often comment on how the
                            sound clears their mind and restores balance.
                        </div>
                        <div className="review-block-rating">
                            {renderStars(rating)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="review-block">
                <div className="review-row">
                    <div className="col-sm-3">
                        <img
                            src="../assets/images/himalaya.jpg"
                            className="img-rounded"
                            alt="Reviewer"
                        />
                        <div className="review-block-name">
                            <a href="#">&nbsp;Achyut Neupane</a>
                        </div>
                        <div className="review-block-date">
                            October 20, 2018
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="review-block-title">
                            Tibetan Singing Bowl
                        </div>
                        <div className="review-block-description">
                            I recently purchased a Tibetan Singing Bowl, and I
                            am absolutely in love with it! As a beginner to
                            sound healing and meditation, I was looking for a
                            tool that would help me enhance my practice, and
                            this bowl exceeded all my expectations. The
                            craftsmanship is beautiful, with intricate designs
                            that are visually stunning. The bowl has a nice,
                            solid weight to it, which gives it a premium feel.
                            When I strike the bowl with the mallet, the sound is
                            incredibly rich, deep, and resonant. It lingers for
                            a long time, vibrating through my entire body, which
                            I find incredibly grounding.
                        </div>
                        <div className="review-block-rating">
                            {renderStars(rating)}
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional reviews */}
        </div>
    );
};

export default ReviewsComponent;
