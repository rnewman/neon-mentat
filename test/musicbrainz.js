exports.schema = `
[
 {
  :db/ident :country/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/gid
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :artist/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :artist/sortName
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/type
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/gender
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/country
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/startYear
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/startMonth
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/startDay
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endYear
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endMonth
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endDay
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

{
  :db/ident :abstractRelease/gid
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :abstractRelease/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :abstractRelease/type
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :abstractRelease/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :abstractRelease/artistCredit
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/gid
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :release/country
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/barcode
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :release/media
  :db/valueType :db.type/ref
  :db/isComponent true
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :release/packaging
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :release/year
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/month
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/day
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/artistCredit
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :release/abstractRelease
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :release/status
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :medium/tracks
  :db/valueType :db.type/ref
  :db/isComponent true
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :medium/format
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :medium/position
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :medium/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :medium/trackCount
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :track/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :track/position
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :track/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :track/duration
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 ]`;

exports.data = `[

]`;

/*
exports.schema = `
[
 {
  :db/ident :country/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/gid
  :db/valueType :db.type/uuid
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :artist/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :artist/sortName
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/type
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/gender
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/country
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/startYear
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :artist/startMonth
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/startDay
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endYear
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endMonth
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :artist/endDay
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

{
  :db/ident :abstractRelease/gid
  :db/valueType :db.type/uuid
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :abstractRelease/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :abstractRelease/type
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :abstractRelease/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :abstractRelease/artistCredit
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/gid
  :db/valueType :db.type/uuid
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :release/country
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/barcode
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :release/media
  :db/valueType :db.type/ref
  :db/isComponent true
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :release/packaging
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :release/year
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/month
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/day
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :release/artistCredit
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :release/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :release/abstractRelease
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  }

 {
  :db/ident :release/status
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :medium/tracks
  :db/valueType :db.type/ref
  :db/isComponent true
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :medium/format
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :medium/position
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :medium/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  }

 {
  :db/ident :medium/trackCount
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :track/artists
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  
  }

 {
  :db/ident :track/position
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  }

 {
  :db/ident :track/name
  :db/valueType :db.type/string
  :db/cardinality :db.cardinality/one
  
  
  
  }

 {
  :db/ident :track/duration
  :db/valueType :db.type/long
  :db/cardinality :db.cardinality/one
  
  
  }

 ]`;
*/