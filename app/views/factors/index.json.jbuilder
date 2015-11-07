

  json.factors(mood.factors) do |fact|
    json.id fact.id
    json.blurb fact.blurb
    json.attachment fact.attachment
    json.created_at fact.created_at
  end
