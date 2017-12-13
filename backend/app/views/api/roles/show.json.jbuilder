# json.role do
#   json.extract! @role
#   json.array! @role.projects.pluck(:id)
# end
#
# json.projects do
#   @role.projects.each do |project|
#     json.set! project.id do
#       json.extract! project, :project, :location,
#     end
#   end
# end

json.set! :role do
  json.extract! @role, :id, :title, :location, :start_date, :end_date, :industry, :review, :user_id
end
json.set! :projects do
  json.array! @role.projects do |project|
    json.extract! project, :role_id, :project, :location,
                                    :start_date, :end_date, :review, :rating
  end
end
