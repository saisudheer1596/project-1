import React, { useState } from 'react';
import './Style.css'




function FactChecker() {
    const [articleId, setArticleId] = useState('');
    const [factResult, setFactResult] = useState('');

    const handleCheckFact = async () => {

        if (articleId === '123') {
            setFactResult('Fact: True');
        } else {
            setFactResult('Fact: False');
        }
    };


    return (
        <div className="form">
            <span>
                <label className="label">Enter Article ID:</label>
                <input
                    type="text"
                    className="input"
                    value={articleId}
                    onChange={(e) => setArticleId(e.target.value)}
                    placeholder="Article ID"
                />
                <button className="button" onClick={handleCheckFact}>
                    Check Fact
                </button>
            </span>
            {factResult && <p>{factResult}</p>}
        </div>
    );
}

export default FactChecker;
