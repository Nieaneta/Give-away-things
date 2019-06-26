import React, { Component } from "react";

import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";

class FormOddaj extends Component {
    constructor() {
        super();
        this.deleteAccount = this.deleteAccount.bind(this);
        this.logout = this.logout.bind(this);
    }

    deleteAccount(e) {
        console.log("Deleting Account");
    }

    logout(e) {
        console.log("Logging out");
    }

    render() {
        return (
            <DropdownMenu userName={false}>
                <MenuItem text="Profil" location="/profile" />
                <MenuItem text="Ustawienia" location="/settings" />
                <MenuItem text="Moje zbiórki" location="/my-collection" />
                <MenuItem text="Logout" onClick={this.loggout} />
            </DropdownMenu>
        );
    }
}

export default FormOddaj;
