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
  @role.projects.each do |project|
    json.set! project.id do
      json.extract! project, :role_id, :project, :location, :start_date,
                             :end_date, :review, :rating
      json.real_ids do
        json.array! project.reals.pluck(:id)
      end
    end
  end
end
