import './Tabs.css'

function Tabs() {
    return ( 
        <>
            <div className="tabs-container">
                <div className="tabs-container__all">All</div>
                <div className="tabs-container__favorites">My favorites</div>
                <div className="tabs-container__popular">Popular</div>
            </div>
        </>
    );
}

export default Tabs;