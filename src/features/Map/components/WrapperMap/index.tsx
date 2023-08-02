import { observer } from 'mobx-react-lite'
import { mapInstitute } from '@/src/features/Map/store/Map'
import MapInstitutes from '@/src/features/Map/components/MapInstitutes'

const WrapperMap = () => {
    const { toggleEvents, onToggleEvents } = mapInstitute

    return (
        <div onClick={e => e.stopPropagation()}>
            <div onClick={() => onToggleEvents(true)}>
                <div style={{ pointerEvents: toggleEvents ? 'auto' : 'none' }}>
                    <MapInstitutes />
                </div>
            </div>
        </div>
    )
}

export default observer(WrapperMap)
