json.mood_id @factor.mood_id

json.factor do
  json.id @factor.id
  json.blurb @factor.blurb
  json.attachment @factor.attachment
  json.occured_at @factor.occured_at
end
