import "reflect-metadata";

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Container } from 'inversify';
import { Provider } from 'inversify-react';

const container = new Container();

class App extends React.Component<{}, void> {
    render() {
        return (
            <div>
                Using library <a href="https://github.com/kukkimonsuta/inversify-react">inversify-react</a> causes warning
                <br />
                <pre><code>Warning: Failed context type: Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types</code></pre>
                <pre><code>printWarning                   @	warning.js:39<br />
warning                        @	warning.js:63<br />
checkReactTypeSpec             @	checkReactTypeSpec.js:83<br />
_checkContextTypes             @	ReactCompositeComponent.js:539<br />
_processContext                @	ReactCompositeComponent.js:487<br />
mountComponent                 @	ReactCompositeComponent.js:182<br />
mountComponent                 @	ReactReconciler.js:48<br />
performInitialMount            @	ReactCompositeComponent.js:373<br />
mountComponent                 @	ReactCompositeComponent.js:260<br />
mountComponent                 @	ReactReconciler.js:48<br />
mountComponentIntoNode         @	ReactMount.js:107<br />
perform                        @	Transaction.js:146<br />
batchedMountComponentIntoNode  @	ReactMount.js:129<br />
perform                        @	Transaction.js:146<br />
batchedUpdates                 @	ReactDefaultBatchingStrategy.js:65<br />
batchedUpdates                 @	ReactUpdates.js:100<br />
_renderNewRootComponent        @	ReactMount.js:322<br />
_renderSubtreeIntoContainer    @	ReactMount.js:404<br />
render                         @	ReactMount.js:425</code></pre>
                <br />
                <p>
                    For the love of go I can't fire out what I'm doing wrong and how to get rid of it.<br />
                    It is most definitely related to context, but other libraries (like react-router) doesn't seem to be affected.<br />
                    <br />
                    Any hints appreciated (<a href="mailto:lukas@dramiel.com">lukas@dramiel.com</a>) .</p>
                <br />
                Source code: <a href="https://github.com/kukkimonsuta/inversify-react-sample">https://github.com/kukkimonsuta/inversify-react-sample</a>
            </div>
        );
    }
}

ReactDOM.render(<Provider container={container}><App /></Provider>, document.getElementById("app"));
