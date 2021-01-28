// The United States uses the imperial system of weights and measures, 
//which means that there are many different, seemingly arbitrary units to measure distance. 
//There are 12 inches in a foot, 3 feet in a yard, 22 yards in a chain, and so on.

// Create a data structure that can efficiently convert a certain quantity of one unit to the correct amount of any other unit. 
//You should also allow for additional units to be added to the system.

class UnitConverter {
    constructor() {
        this.dict = []
    }

    /**
     * accepts an object containing 2 units and their values when compared to each other
     * @param {{[unitName1]:[number],[unitName2]:[number]}} unitObject 
     */
    addUnit(unitObject) {
        this.dict.push(unitObject)
    }

    convert(sourceUnit, targetUnit, unitQuantity) {
        let _dict = [...this.dict]
        let _conversion = _dict.find(x => x[sourceUnit] && x[targetUnit])
        let _result
        let _order = Object.keys(_conversion)
        if (sourceUnit == _order[0] && targetUnit == _order[1]) {

            _result = (unitQuantity / _conversion[sourceUnit]) / _conversion[targetUnit]
        } else {

            _result = (unitQuantity * _conversion[sourceUnit]) / _conversion[targetUnit]
        }

        return _result
    }



}

// convert('inch', 'yard', 36) === 1