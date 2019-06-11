import React, { Component } from "react";

class Info extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="info-bg" />
                    <GiveBags />
                    <SupportOrganization />
                    <CollectionOrg />
                </div>
            </>
        );
    }
}

class GiveBags extends Component {
    state = {
        numberBag: 0
    };

    render() {
        return (
            <>
                <div className="col">
                    <div className="give-bag-number">
                        {this.state.numberBag}
                    </div>
                    <h3 className="give-bag-title">oddanych worków</h3>
                    <p className="give-bag-txt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae eveniet explicabo facilis alias necessitatibus
                        temporibus.
                    </p>
                </div>
            </>
        );
    }
}

class SupportOrganization extends Component {
    state = {
        numberOrganization: 0
    };

    render() {
        return (
            <>
                <div className="col">
                    <div className="organization-number">
                        {this.state.numberOrganization}
                    </div>
                    <h3 className="organization-title">
                        wspartych organizacji
                    </h3>
                    <p className="organization-txt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae eveniet explicabo facilis alias necessitatibus
                        temporibus.
                    </p>
                </div>
            </>
        );
    }
}

class CollectionOrg extends Component {
    state = {
        numberCollection: 0
    };

    render() {
        return (
            <>
                <div className="col">
                    <div className="collection-number">
                        {this.state.numberCollection}
                    </div>
                    <h3 className="collection-title">
                        zorganizowanych zbiórek
                    </h3>
                    <p className="collection-txt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae eveniet explicabo facilis alias necessitatibus
                        temporibus.
                    </p>
                </div>
            </>
        );
    }
}

export default Info;
