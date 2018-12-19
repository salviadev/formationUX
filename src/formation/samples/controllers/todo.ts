/// <reference types="@phoenix/phoenix-cli" />
namespace Formation {
    const
        _p = Phoenix,
        _customData = _p.customData;

    class TodoController extends Phoenix.ui.FormController {
        public initObjectState(data: any) {
            // Initialization            
        }
        public onModelChanged(action: any, model: any, form: Phoenix.ui.Form) {
            super.onModelChanged(action, model, form);
            const that = this;
            console.log(action);
            switch (action.property) {
                case '$links.modifyName':
                    model.name = 'My Name';
                    // model.checkList.push({done: false, title: ''})
                    break;

                case '$links.toggleIsDisabledName':
                    model.$states.name.isDisabled = !model.$states.name.isDisabled;
                    break;
                case '$links.toggleIsHiddenName':
                    model.$states.name.isHidden = !model.$states.name.isHidden;
                    break;
                case '$links.home':
                    form.navigate('home-page/home', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
            }
        }
    }
    _customData.register('formation.todo.controller', new TodoController());
}