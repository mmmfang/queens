json.current_user current_user.email

json.moods(@moods) do |m|
  json.id m.id
  json.happiness m.happiness
  json.created_at m.created_at
  json.updated_at m.updated_at

end
