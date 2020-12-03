/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {TemplateView} from "../utils/TemplateView.js";
import {ClientListView} from "./ClientListView.js";
import {PreviewView} from "../preview/PreviewView.js";

export class OpenLinkView extends TemplateView {
	render(t, vm) {
		return t.div({className: "OpenLinkView card"}, [
			t.view(new PreviewView(vm.previewViewModel)),
			t.p({className: {accept: true, hidden: vm => vm.clientsViewModel}}, t.button({
				className: "primary fullwidth",
				onClick: () => vm.showClients()
			}, vm => vm.showClientsLabel)),
			t.mapView(vm => vm.clientsViewModel, childVM => childVM ? new ClientListView(childVM) : null),
			t.p({className: {hidden: vm => !vm.previewDomain}}, ["Preview provided by ", vm => vm.previewDomain]),
		]);
	}
}
