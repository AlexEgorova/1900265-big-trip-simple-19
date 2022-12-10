import View from './view';
import {html} from '../utils';
import PointTypeView from './common/point-type-view';
import DestinationView from './common/destination-view';
import DatesView from './common/dates-view';
import BasePriceView from './common/base-price-view';
import OffersView from './common/offers-view';
import DestinationDetailsView from './common/destination-details-view';

export default class NewPointEditorView extends View {
  constructor() {
    super();

    this.classList.add('trip-events__item');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <${PointTypeView}></${PointTypeView}>
          <${DestinationView} class="event__field-group"></${DestinationView}>
          <${DatesView} class="event__field-group"></${DatesView}>
          <${BasePriceView} class="event__field-group"></${BasePriceView}>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <${OffersView} class="event__section"></${OffersView}>
          <${DestinationDetailsView} class="event__section"></${DestinationDetailsView}>
        </section>
      </form>
    `;
  }
}

customElements.define(String(NewPointEditorView), NewPointEditorView);
