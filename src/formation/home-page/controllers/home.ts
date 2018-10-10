// <reference types="phoenix-cli" />
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
                    form.navigate('hello-world/hello-world', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                            source: 'link1'
                        }
                    });
                    break;
            }
        }
    }
    _customData.register('formation.home.controller', new HomeController());
}