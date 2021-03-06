/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017  Waltz open source project
 * See README.md for more information
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { initialiseData } from "../../../common";
import { areFiltersVisible } from "../../../facet/facet-utils";


import template from "./navbar-filters.html";


const bindings = {
};


const initialState = {
    visibility: {
        overlay: false,
        filters: true
    }
};


function controller($timeout, $transitions, $state) {

    const vm = initialiseData(this, initialState);

    const dismissOverlay = (e) => $timeout(
        () => vm.visibility.overlay = false,
        200);

    $transitions.onSuccess({}, (transition) => {
        const {name} = transition.to();
        vm.visibility.filters = areFiltersVisible(name);
    });


    // -- INIT
    vm.$onInit = () => {
        vm.visibility.filters = areFiltersVisible($state.current.name);
    };


    // -- INTERACT
    vm.dismissOverlay = dismissOverlay;

    vm.showOverlay = () => {
        vm.visibility.overlay = true;
    };

}


controller.$inject = [
    "$timeout",
    "$transitions",
    "$state"
];


const component = {
    bindings,
    controller,
    template
};


export default {
    component,
    id: "waltzNavbarFilters"
};