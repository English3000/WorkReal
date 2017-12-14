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
  json.extract! @role, :id, :user_id, :title, :location, :start_date,
                       :end_date, :industry, :review
  json.project_ids do
    json.array! @role.project_ids
  end
  json.real_ids do
    json.array! @role.real_ids
  end
end

json.set! :projects do
  json.array! @role.projects do |project|
    json.extract! project, :id, :role_id, :project, :location,
                                    :start_date, :end_date, :review, :rating
    json.set! :reals do
      json.array! project.reals do |real|
        json.extract! real, :id, :role_id, :project_id, :body
      end
    end
  end
end
# @role.projects.each do |project|
#   json.set! project.id do
#     json.extract! project, :role_id, :project, :location, :start_date,
#                            :end_date, :review, :rating
#     json.real_ids do
#       json.array! project.real_ids
