

  json.factors(@factors) do |factor|
    json.id factor.id
    json.blurb factor.blurb
    # json.attachment factor.attachment
    json.created_at factor.created_at
  end
