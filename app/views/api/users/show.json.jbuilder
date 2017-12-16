json.extract! @user, :id, :email, :session_token, :created_at

json.role_ids do
  json.array! @user.role_ids
end

json.follow_ids do
  json.array! @user.follow_ids
end
