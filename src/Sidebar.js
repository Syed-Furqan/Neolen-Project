import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="s1">
                <div className="sidebar__header">
                    <p>Voices</p>
                    <div><input type="checkbox"/><span>Select All</span></div>
                </div>
                <div className="sidebar__buttons">
                    <button><i className="fas fa-trash"></i> Delete</button>
                    <button><i className="fas fa-code-branch"></i> Merge</button>
                </div>
                <div className="sidebar__users">
                    <div className="sidebar__users-info">
                        <div>
                            <input type="checkbox"/>
                            <p>Jenny Multilingual</p>
                        </div>
                        <div>
                            <i className="fas fa-play-circle"></i>
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-arrow-circle-down"></i>
                        </div>
                    </div>
                    <div className="progress_bar"><div></div></div>
                </div>
                <div className="sidebar__users">
                    <div className="sidebar__users-info">
                        <div>
                            <input type="checkbox"/>
                            <p>Amber</p>
                        </div>
                        <div>
                            <i className="fas fa-play-circle"></i>
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-arrow-circle-down"></i>
                        </div>
                    </div>
                    <div className="progress_bar"><div></div></div>
                </div>
                <div className="sidebar__users">
                    <div className="sidebar__users-info">
                        <div>
                            <input type="checkbox"/>
                            <p>Eric Ubioid</p>
                        </div>
                        <div>
                            <i className="fas fa-play-circle"></i>
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-arrow-circle-down"></i>
                        </div>
                    </div>
                    <div className="progress_bar"><div></div></div>
                </div>
                <div className="sidebar__info">
                    <p>Lorem ipsum dolor sit amet consectetur elit. Recusandae quae optio inventore.<strong>Read More</strong></p>
                </div>
            </div>
            <div className="sidebar__footer">
                <button>Preview</button>
                <button>Create</button>
            </div>
        </div>
    );
}

export default Sidebar;