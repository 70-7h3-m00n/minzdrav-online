// import { City } from '@maxmind/geoip2-node'

type TypeBuildUserLocationProps = {
    // geo2ipData: City | null | undefined
    geo2ipData: null | undefined
}

export const buildUserLocation = ({ geo2ipData }: TypeBuildUserLocationProps) => null
// export const buildUserLocation = ({
//   geo2ipData
// }: TypeBuildUserLocationProps) => ({
//   continent: {
//     code: geo2ipData?.continent?.code,
//     names: {
//       ru: geo2ipData?.continent?.names.ru,
//       en: geo2ipData?.continent?.names.en
//     }
//   },
//   country: {
//     code: geo2ipData?.country?.isoCode,
//     names: {
//       ru: geo2ipData?.country?.names.ru,
//       en: geo2ipData?.country?.names.en
//     }
//   },
//   city: {
//     names: {
//       en: geo2ipData?.city?.names.en,
//       ru: geo2ipData?.city?.names.ru
//     }
//   },
//   coordinates: {
//     accuracyRadius: geo2ipData?.location?.accuracyRadius,
//     latitude: geo2ipData?.location?.latitude,
//     longitude: geo2ipData?.location?.longitude
//   },
//   timeZone: geo2ipData?.location?.timeZone,
//   postalCode: geo2ipData?.postal?.code
// })

export default buildUserLocation
