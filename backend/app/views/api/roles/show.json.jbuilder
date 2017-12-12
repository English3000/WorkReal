# json.partial! '/api/roles/role', role: @role
#
# json.array! projects do
#   @projects.each do |project|
#     project.extract! :id, :role_id, :project, :zip_code,
#      :start_date, :end_date, :review, :rating
# end

json.role do
  json.extract! @role
  json.array! @role.projects.pluck(:id)
end

json.projects do
  @role.projects.each do |project|
    json.set! project.id do
      json.extract! project, :project, :location,
    end
  end
end
