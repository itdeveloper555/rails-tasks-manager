class ProjectsController < ApplicationController
  
  def index
  	@projects = Project.all.order(:id )
  end

  def update
    @todo = Todo.find(params[:commit])
    if @todo.update(isCompleted:params[:isCompleted])
      redirect_to :root
    else
      render plain: params[:isCompleted]
    end
  end

end
