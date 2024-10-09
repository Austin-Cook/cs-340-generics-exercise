type Socks = { style: string; color: string }
type Shirt = { style: string; size: string; }
type Pants = { waist: number; length: number; }

class Drawer<T> {
  private _clothingItems: T[] = [];

  public get isEmpty(): boolean {
    return this._clothingItems.length === 0;
  }

  public addItem(item: T): void {
    this._clothingItems.push(item);
  }

  public removeItem(): T | undefined {
    return this._clothingItems.pop();
  }

  public removeAll() {
    let items = this._clothingItems;
    this._clothingItems = [];

    return items;
  }
}

class Dresser<T, U, V> {
  public topDrawer: Drawer<T>;
  public middleDrawer: Drawer<U>;
  public bottomDrawer: Drawer<V>;

  constructor() {
    this.topDrawer = new Drawer<T>;
    this.middleDrawer = new Drawer<U>;
    this.bottomDrawer = new Drawer<V>;
  }
}

function assertEquals<T>(expected: T, actual: T) {
  if (expected !== actual) {
    throw new Error(`${expected} !== ${actual}`);
  }
}

function assertArrayEquals<T>(expected: T[], actual: T[]) {
  if (expected.length !== actual.length) {
    throw new Error('Array lengths differ');
  }

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      throw new Error(`Array items differ. Expected: ${expected}, Actual: ${actual}`);
    }
  }
}

function main() {
  let socks1: Socks = { style: 'a', color: 'blue' };
  let socks2: Socks = { style: 'b', color: 'green' };
  let shirt1: Shirt = { style: 'a', size: 'M' };
  let shirt2: Shirt = { style: 'b', size: 'L' };
  let pants1: Pants = { waist: 30, length: 32 };
  let pants2: Pants = { waist: 32, length: 34 };

  let dresser = new Dresser<Socks, Shirt, Pants>();

  // top
  assertEquals(undefined, dresser.topDrawer.removeItem());
  assertEquals(true, dresser.topDrawer.isEmpty);
  dresser.topDrawer.addItem(socks1);
  assertEquals(false, dresser.topDrawer.isEmpty);
  assertEquals(socks1, dresser.topDrawer.removeItem());
  dresser.topDrawer.addItem(socks1);
  dresser.topDrawer.addItem(socks2);
  assertArrayEquals([socks1, socks2], dresser.topDrawer.removeAll());
  console.log("All assertions passed!");
}

main()
