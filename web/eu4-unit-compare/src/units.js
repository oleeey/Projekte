const units = {
    aboriginal: "",
    african: "",
    anatolian: "",
    chinese: "",
    eastern: "",
    highAmerican: "",
    indian: "",
    muslim: "",
    nativeAmerican: "",
    mesoAmerican: "",
    northAmerican: "",
    southAmerican: "",
    nomad: "",
    polynesian: "",
    western: "",
}

function Unit(fireOff, fireDef, shockOff, shockDef, moraleOff, moraleDef) {
    this.fireOff = fireOff;
    this.fireDef = fireDef;
    this.shockOff = shockOff;
    this.shockDef = shockDef;
    this.moraleOff = moraleOff;
    this.moraleDef = moraleDef;
}

console.log("hello");