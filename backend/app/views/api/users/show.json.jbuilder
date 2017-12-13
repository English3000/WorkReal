json.extract! @user, :id, :email, :session_token

if user.roles.count > 0
  json.roles do
    user.roles.each do |role|
      json.set! role.id do
        json.extract! role, :id, :user_id, :title, :industry, :location, :review, :start_date, :end_date
      end
    end
  end

  else
    json.roles Object

end


# has_many :roles
# has_many :projects
# has_many :truths
# has_many :follows
