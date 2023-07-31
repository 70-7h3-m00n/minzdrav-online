import { Placemark, YMaps, Map, RouteButton, GeolocationControl } from '@pbe/react-yandex-maps'
import styles from './styles.module.scss'

const MapInstitutes = (): JSX.Element => {
    return (
        <YMaps query={{ lang: 'en_RU' }}>
            <Map className={styles.mapContent} defaultState={{ center: [55.721189, 37.652301], zoom: 17 }}>
                <GeolocationControl options={{ float: 'right' }} />
                <RouteButton options={{ float: 'right' }} />
                <Placemark defaultGeometry={[55.721189, 37.652301]} />
            </Map>
        </YMaps>
    )
}

export default MapInstitutes
