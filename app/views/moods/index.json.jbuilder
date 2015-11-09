json.user current_user.email

json.moods(@moods) do |mood|
  json.id mood.id
  json.happiness mood.happiness
  json.created_at mood.created_at

  json.factors(mood.factors) do |fact|
    json.id fact.id
    json.blurb fact.blurb
    # json.attachment fact.attachment
    json.created_at fact.created_at
  end
end
