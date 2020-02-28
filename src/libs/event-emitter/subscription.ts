import { EventEmitter, Observer } from "./internal";

export class Subscription {
  constructor(public emitter: EventEmitter, public observer: Observer) {}

  unsubscribe() {
    this.emitter.unsubscribe(this);
  }
}
