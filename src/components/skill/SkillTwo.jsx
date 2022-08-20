import React, {Fragment} from 'react'

const SkillTwo = () => {
    return (
        <Fragment>
            <div className="skills-progress skills ps-xxl-5 mt-45 sm-mt-80">
                <div className="habilidades_contenedor">
                    <div className="codeconSkills">
                        <div className="codeconSkillbar mb-80 md-mb-70">
                            <div className="skill-text">
                                <span className="codeconSkillArea">Data Consulting</span>
                            </div>
                            <div className="skillBar" data-percent="63%">
                                <span className="PercentText">63%</span>
                            </div>
                        </div>
                        <div className="codeconSkillbar skill-2 mb-80 md-mb-70">
                            <div className="skill-text">
                                <span className="codeconSkillArea ">Big Data &amp; AI</span>
                            </div>
                            <div className="skillBar" data-percent="92%">
                                <span className="PercentText">92%</span>
                            </div>
                        </div>
                        <div className="codeconSkillbar skill-3">
                            <div className="skill-text">
                                <span className="codeconSkillArea ">Predictive Analysis</span>
                            </div>
                            <div className="skillBar" data-percent="78%">
                                <span className="PercentText">78%</span>
                            </div>
                        </div>
                    </div>
                    {/* /.codeconSkills */}
                </div>
                {/* /.habilidades_contenedor */}
            </div>
        </Fragment>
    )
}

export default SkillTwo