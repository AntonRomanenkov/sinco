import React, {Fragment} from 'react'

const Skill = () => {
    return (
        <Fragment>
            <div className="skills-progress skills">
                <div className="habilidades_contenedor">
                    <div className="codeconSkills">
                        <div className="codeconSkillbar mb-80 md-mb-60">
                            <div className="skill-text">
                                <span className="codeconSkillArea">SKIll</span>
                            </div>
                            <div
                                className="skillBar"
                                data-percent="73%"
                                style={{
                                background: '#F25DFF'
                            }}>
                                <span className="PercentText">73%</span>
                            </div>
                        </div>
                        <div className="codeconSkillbar skill-2">
                            <div className="skill-text">
                                <span className="codeconSkillArea ">Performance</span>
                            </div>
                            <div
                                className="skillBar"
                                data-percent="91%"
                                style={{
                                background: '#00E8FA'
                            }}>
                                <span className="PercentText">91%</span>
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

export default Skill