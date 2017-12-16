json.extract! @user, :id, :email, :session_token

json.role_ids do
  json.array! @user.role_ids.reverse
end

json.follow_ids do
  json.array! @user.follow_ids
end
