function Pixel(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this._id = Math.random();
}

// TODO: fit into class syntax: funtion to calculate and return the distance
Pixel.prototype.distance = function(p) {
    const {pow, sqrt} = Math;
    return sqrt(pow(this.x - p.x, 2) + pow(this.y - p.y, 2))
};

// TODO: fit into class syntax: function to return the midpoint
Pixel.prototype.midpoint = function(p) {
    const x = (this.x + p.x) / 2.0;
    const y = (this.y + p.y) / 2.0;
    return Pixel.fromObj({x, y})
};

// TODO: fit into class syntax: a toString function
Pixel.prototype.toString = function() {
    return `${this.id}: (x: ${this.x}, y: ${this.y})`
};

// TODO: fit into class syntax: static function to create a Pixel from an object
Pixel.fromObj = function(obj) {
    const p = new Pixel(obj.x, obj.y);
    return p;
};

// TODO: refactor: getter and setter for the id field
Object.defineProperty(Pixel.prototype, 'id', {
    get() {
        return this._id
    },
    set(val) {
        this._id = val
    },
});

// TODO: create a Voxel class extending Pixel class
function Voxel(x, y, z = 0) {
    Pixel.call(this, x, y);
    this.z = z
}

Voxel.prototype = Object.create(Pixel.prototype);

// TODO: fit into class syntax: function to calculate and return the distance
Voxel.prototype.distance = function(v) {
    const deltaX = this.x - v.x;
    const deltaY = this.y - v.y;
    const deltaZ = this.z - v.z;

    const {pow, sqrt} = Math;
    return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2))
};

// TODO: fit into class syntax: function to return the midpoint
Voxel.prototype.midpoint = function(v) {
    const midX = (this.x + v.x) / 2.0;
    const midY = (this.y + v.y) / 2.0;
    const midZ = (this.z + v.z) / 2.0;
    return Voxel.fromObj({x: midX, y: midY, z: midZ})
};

// TODO: fit into class syntax: a toString function
Voxel.prototype.toString = function() {
    return `${this.id}: (x: ${this.x}, y: ${this.y}, z: ${this.z})`
};

// TODO: fit into class syntax: static function to create a Voxel from an object
Voxel.fromObj = function(obj) {
    return new Voxel(obj.x, obj.y, obj.z)
};





// Except converting to arraw functinos, don't change anything below
// make sure that after refactoring these functions still work and the result is still the same
function testDistance() {
    const p = new Pixel(5, 12);
    const q = Pixel.fromObj({x: 0, y: 0});
    return p.distance(q)
}

function testMidpoint() {
    const p = new Pixel(7, 24);
    const q = Pixel.fromObj({x: 0, y: 0});
    return p.midpoint(q).toString()
}

function testDistanceVoxel() {
    const v = new Voxel(5, 6, 7);
    const w = Voxel.fromObj({x: 2, y: 3.4, z: 7.9});
    return v.distance(w)
}

function testMidpointVoxel() {
    const v = new Voxel(5, 6, 7);
    const w = Voxel.fromObj({x: 2, y: 3.4, z: 7.9});
    return v.midpoint(w).toString()
}


console.log('testDistance', testDistance())
console.log('testMidpoint', testMidpoint())
console.log('testDistanceVoxel', testDistanceVoxel())
console.log('testMidpointVoxel', testMidpointVoxel())
