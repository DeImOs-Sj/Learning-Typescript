interface takePhoto {
    cameraMode: string,
    filter: string
    burst: number
}

class Instagram implements takePhoto {
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number) {



    }
}

