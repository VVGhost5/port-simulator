class Ship {
    constructor(id, type, isLoaded, direction) {
        this.id = id;
        this.type = type;
        this.isLoaded = isLoaded;
        this.direction = direction;
        this.goingToPort = null;
    }
}

export default Ship;