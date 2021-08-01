import React from 'react'
import './definations.css'

const Definations = ({ word, category, meaning }) => {
    return (
        <div className='meanings'>
            {meaning[0] && word && category === "en"  && (
                <audio

                    src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
                    style={{ backgroundColor: "#fff", borderRadius: 10 }}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {
                word === "" ? (
                    <span className='subTitle'>start by searching 📚</span>
                ) : (
                    meaning.map((m) =>
                        m.meanings.map((item) =>
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{ backgroundColor: '#222629', color: 'white' }}>

                                    <p>Defination: <b>{def.definition}</b></p>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}



                                </div>

                            ))
                        )
                    )
                )}

        </div>
    )
}

export default Definations
