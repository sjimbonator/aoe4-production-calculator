import {useAppSelector} from "../../../hooks";
import UNITS from "../../../data/unit/Units";
import Unit from "../../../model/Unit";

function UnitsDataDetails() {
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const units: Unit[] = Object.keys(selectedUnits).map(id => UNITS.get(id)!);

    return (
        <div>
            {units.map(unit =>
                <div key={unit.id}>{unit.id}: ({unit.cost.food}, {unit.cost.wood}, {unit.cost.gold}) {unit.productionTime}s</div>
            )}
        </div>
    );
}

export default UnitsDataDetails;
