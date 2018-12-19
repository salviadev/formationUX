// <reference types="@phoenix/phoenix-cli" />
namespace Formation {
    const
        _p = Phoenix,
        _customData = _p.customData;

    class HomeController extends Phoenix.ui.FormController {
        public initObjectState(data: any) {
            // Initialization            
        }
        public onModelChanged(action: any, model: any, form: Phoenix.ui.Form) {
            super.onModelChanged(action, model, form);
            const that = this;
            switch (action.property) {
                case '$links.link1':
                    form.navigate('hello-world/hello', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                            source: 'link1'
                        }
                    });
                    break;
                case '$links.customer':
                    form.navigate('samples/customer', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
                case '$links.address':
                    form.navigate('samples/address', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
                case '$links.todo':
                    form.navigate('samples/todo', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
            }
        }
    }
    _customData.register('formation.home.controller', new HomeController());
}